import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {};
    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    bindModel() {
        this.model.on('change', () => {
            this.render();
        });
    }

    mapRegions(fragment: DocumentFragment) {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const element = fragment.querySelector(regionsMap[key]);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    onRender() {}

    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }

    bindEvents(documentFragment: DocumentFragment) {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            documentFragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    abstract eventsMap(): { [key: string]: () => void };

    regionsMap(): { [key: string]: string } {
        return {};
    }

    abstract template(): string;
}
