import { Request, Response, NextFunction } from 'express';
import { get, post } from './decorators/routes';
import { controller } from './decorators/controllers';
import { use } from './decorators/use';
import { bodyValidator } from './decorators/bodyValidator';

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"/>
                </div>
                <button>Submit</button>
            </div>`);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email === 'hi@hi.com' && password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }
}
