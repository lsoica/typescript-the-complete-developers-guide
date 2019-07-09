import { Eventing } from './Eventing';
import axios from 'axios';

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(private rootUrl: string, private deserialize: (json: K) => T) {}
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch() {
        axios.get(`${this.rootUrl}`).then(response => {
            response.data.forEach((element: K) => {
                this.models.push(this.deserialize(element));
            });
            this.trigger('change');
        });
    }
}
