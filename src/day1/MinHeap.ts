export default class MinHeap {
    public length: number;
    private heap: number[];

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.heap[0];
        this.length--;
        if (this.length === 0) {
            this.heap = [];
            return out;
        }

        this.heap[0] = this.heap[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lValue = this.heap[lIdx];
        const rValue = this.heap[rIdx];
        const value = this.heap[idx];

        if (lValue > rValue && value > rValue) {
            this.heap[idx] = rValue;
            this.heap[rIdx] = value;

            this.heapifyDown(rIdx);
        } else if (rValue > lValue && value > lValue) {
            this.heap[idx] = lValue;
            this.heap[lIdx] = value;

            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentValue = this.heap[parent];
        const curr = this.heap[idx];

        if (parentValue > curr) {
            this.heap[idx] = parentValue;
            this.heap[parent] = curr;

            this.heapifyUp(parent);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
