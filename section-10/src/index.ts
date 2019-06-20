class Sorter {
    constructor(public collection: number[]) {}

    sort(): void {
        for (let i = 0; i < this.collection.length - 1; i++) {
            for (let j = 1; j < this.collection.length - i; j++) {
                if (this.collection[j] < this.collection[j - 1]) {
                    this.swap(j, j - 1);
                }
            }
        }
    }

    swap(i: number, j: number) {
        let tmp = this.collection[i];
        this.collection[i] = this.collection[j];
        this.collection[j] = tmp;
    }
}

let sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
