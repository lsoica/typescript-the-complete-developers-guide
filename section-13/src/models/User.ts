import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
    [propName: string]: any;
}

const rootUrl = 'http://localhost:3000/Users';
export class User extends Model<UserProps> {
    constructor(attrs: UserProps) {
        super(new Attributes(attrs), new Eventing(), new ApiSync(rootUrl));
    }

    static buildUserCollection() {
        return new Collection(rootUrl, (props: UserProps) => {
            return new User(props);
        });
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}
