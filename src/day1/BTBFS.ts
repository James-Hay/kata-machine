export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const nodeList = [head];

    while (nodeList.length) {
        for (let i = 0; i < nodeList.length; i++) {
            const item = nodeList.shift();

            if (item?.value === needle) {
                return true;
            }

            if (item?.left) {
                nodeList.push(item?.left);
            }

            if (item?.right) {
                nodeList.push(item?.right);
            }
        }
    }

    return false;
}
