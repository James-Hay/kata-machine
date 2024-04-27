type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

function createNode<V>(value: V): Node<V> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(capacity: number = 10) {
        this.length = 0;
        this.capacity = capacity;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        // does it exist
        let item = this.lookup.get(key);
        // if it doesn't we need to insert

        if (!item) {
            item = createNode(value);
            this.length++;
            this.prepend(item);
            this.trimCache();

            this.lookup.set(key, item);
            this.reverseLookup.set(item, key);
        } else {
            this.detach(item);
            this.prepend(item);
            item.value = value;
        }
        // check the capacity and evict if over
        // if it does exist we need to update to the front of the list and the value
    }
    get(key: K): V | undefined {
        // check the cache for existance
        const item = this.lookup.get(key);

        // update the value we found and move it to the front
        if (item) {
            if (this.length === 1) {
                return this.head?.value;
            }

            this.detach(item);
            this.prepend(item);
        }
        // return out the value found if found for return undefined
        return item?.value;
    }

    private detach(item: Node<V>) {
        if (item.prev && item.next) {
            item.prev.next = item.next;
        }

        if (item.next) {
            item.next.prev = item.prev;
        }

        if (this.head === item) {
            this.head = this.head.next;
        }

        if (this.tail === item) {
            this.tail = this.tail.prev;
        }

        item.next = undefined;
        item.prev = undefined;
    }

    private prepend(item: Node<V>) {
        if (!this.head) {
            this.head = this.tail = item;
        }

        item.next = this.head;
        this.head.prev = item;
        this.head = item;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}
