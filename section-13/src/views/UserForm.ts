import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }

    onSetAgeClick = () => {
        this.model.setRandomAge();
    };

    onSetNameClick = () => {
        const input = this.parent.querySelector('input');
        if (input) {
            this.model.set({ name: input.value });
        }
    };

    onSaveClick = () => {
        this.model.save();
    };

    onHeaderHover() {
        console.log('Hover!');
    }

    template(): string {
        return `
        <div>
            <input placeholder="${this.model.get('name')}" />
            <button class="set-name">Change name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
        `;
    }
}
