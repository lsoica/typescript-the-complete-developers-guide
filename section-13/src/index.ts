import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = new User({ name: 'gugu', age: 11 });

const element = document.getElementById('root');
if (element) {
    const userForm = new UserForm(element, user);
    userForm.render();
} else {
    throw Error('Root element not found');
}
