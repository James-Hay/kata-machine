export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];

    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            const item = queue.shift();

            if (item?.value === needle) {
                return true;
            }

            if (item?.left) {
                queue.push(item?.left);
            }

            if (item?.right) {
                queue.push(item?.right);
            }
        }
    }

    return false;
}
