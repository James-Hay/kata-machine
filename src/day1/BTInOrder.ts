function traverse(head: BinaryNode<number>, path: number[]): number[] {
    if (head?.left) {
        traverse(head.left, path);
    }

    path.push(head.value);

    if (head?.right) {
        traverse(head.right, path);
    }

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
