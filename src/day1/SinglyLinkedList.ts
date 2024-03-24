type Node<T> = {
    next?: Node<T>;
    value: T;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    private getNode(idx: number): Node<T> | undefined {
        if (!this.head) {
            return undefined;
        }

        let curHead: Node<T> | undefined = this.head;

        for (let i = 0; curHead && i < idx; ++i) {
            curHead = curHead.next;
        }

        return curHead;
    }

    prepend(item: T): void {
        this.length++;

        const ref = this.head;
        this.head = { value: item, next: ref };
    }
    insertAt(item: T, idx: number): void {
        if (!this.head) {
            this.head = { value: item, next: undefined };
        } else {
            const prevHead = this.getNode(idx);
            const node = { value: item, next: prevHead?.next };

            if (prevHead) {
                prevHead.next = {
                    value: prevHead.value,
                    next: node,
                };
            }
        }

        this.length++;
    }
    append(item: T): void {
        const node = { value: item, next: undefined };

        if (!this.head) {
            this.head = node;
        } else {
            const prevHead = this.getNode(this.length - 1);

            if (prevHead) {
                prevHead.next = node;
            }
        }

        this.length++;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            const ref = this.head;
            this.head = undefined;
            return ref.value;
        }

        let prevHead;
        let curHead: Node<T> | undefined = this.head;

        for (let i = 0; i <= this.length; ++i) {
            if (curHead?.value === item) {
                this.length--;

                if (prevHead) {
                    prevHead.next = curHead.next;
                } else {
                    this.head = curHead.next;
                }

                return curHead.value;
            }

            prevHead = this.head;
            curHead = this.head.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getNode(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        let result;

        if (!this.head) {
            return undefined;
        } else {
            if (idx === 0) {
                result = this.head.value;
                this.head = this.head.next;
            } else {
                const prevHead = this.getNode(idx - 1);
                result = prevHead?.next?.value;

                if (prevHead) {
                    prevHead.next = prevHead?.next?.next;
                }
            }
        }

        this.length--;
        return result;
    }
}
