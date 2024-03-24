export default class ArrayList<T> {
    public length: number;
    private alloc: number;
    private arrayList: Array<T>;

    constructor(size: number) {
        this.length = 0;
        this.alloc = size;
        this.arrayList = new Array(this.alloc);
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (this.length + 1 > this.alloc) {
            const ref = this.arrayList;
            this.alloc = this.alloc * 2;
            this.arrayList = new Array(this.alloc);

            for (let i = 0; i < this.length; ++i) {
                this.arrayList[i] = ref[i];
            }
        }

        this.length++;
        let prev = this.arrayList[idx];

        for (let i = idx + 1; i < this.length; ++i) {
            const ref = this.arrayList[i];
            this.arrayList[i] = prev;

            prev = ref;
        }

        this.arrayList[idx] = item;
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    remove(item: T): T | undefined {
        const idx = this.arrayList.indexOf(item);
        const removedItem = this.arrayList[idx];

        this.removeAt(idx);
        return removedItem;
    }
    get(idx: number): T | undefined {
        return this.arrayList[idx];
    }
    removeAt(idx: number): T | undefined {
        const result = this.arrayList[idx];

        if (this.length > 0 && idx <= this.length && result !== undefined) {
            this.length--;

            let prev = this.arrayList[this.length];

            for (let i = this.length; i >= idx && i >= 0; --i) {
                const ref = this.arrayList[i];
                this.arrayList[i] = prev;

                prev = ref;
            }
        }

        return result;
    }
}
