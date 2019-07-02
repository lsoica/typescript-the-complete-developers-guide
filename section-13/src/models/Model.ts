import { AxiosResponse, AxiosPromise } from 'axios';

interface HasId {
    id?: number;
}

type Callback = () => void;

interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

export class Model<T extends HasId> {
    constructor(private attributes: ModelAttributes<T>, private eventing: Events, private sync: Sync<T>) {}

    on = this.eventing.on;
    trigger = this.eventing.trigger;
    get = this.attributes.get;

    set(update: T) {
        this.attributes.set(update);
        this.eventing.trigger('change');
    }

    fetch() {
        const id = this.get('id');
        if (typeof id == 'number') {
            this.sync.fetch(id).then(response => {
                this.set(response.data);
            });
        } else {
            throw new Error('Cannot fetch without an id');
        }
    }

    save() {
        const attrs = this.attributes.getAll();
        this.sync
            .save(attrs)
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }
}
