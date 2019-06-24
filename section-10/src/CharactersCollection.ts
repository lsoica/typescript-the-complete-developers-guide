import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
    }

    compare(leftIndex: number, rightIndex: number) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number) {
        const characters = this.data.split('');
        let tmp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = tmp;

        this.data = characters.join('');
    }

    get length() {
        return this.data.length;
    }
}
