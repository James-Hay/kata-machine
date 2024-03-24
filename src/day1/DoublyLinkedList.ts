type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;

        if (!this.head) {
            this.head = this.tail = {
                value: item,
                next: undefined,
                prev: undefined,
            };
            return;
        }

        const node: Node<T> = { value: item, next: this.head, prev: undefined };
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0 || !this.head) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        this.length++;
        const curr = this.getAt(idx);

        const node = {
            value: item,
            next: curr,
            prev: curr?.prev,
        };

        if (node.prev) {
            node.prev.next = curr;
        }
    }
    append(item: T): void {
        this.length++;

        if (!this.tail) {
            this.tail = this.head = {
                value: item,
                next: undefined,
                prev: undefined,
            };
            return;
        }

        const node: Node<T> = { value: item, next: undefined, prev: this.tail };
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = node.next;
        }

        if (this.tail === node) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < idx; ++i) {
            curr = curr?.next;
        }

        return curr;
    }
}
