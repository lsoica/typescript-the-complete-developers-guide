import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    data: number[];
    constructor(data: number[]) {
        super();
        this.data = data;
    }

    compare(leftIndex: number, rightIndex: number) {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) {
        let tmp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = tmp;
    }

    get length() {
        return this.data.length;
    }
}
