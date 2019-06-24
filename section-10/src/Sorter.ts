export abstract class Sorter {
    sort(): void {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 1; j < this.length - i; j++) {
                if (this.compare(j - 1, j)) {
                    this.swap(j, j - 1);
                }
            }
        }
    }

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
}
