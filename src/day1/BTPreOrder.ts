function traverse(head: BinaryNode<number>, path: number[]): number[] {
    path.push(head.value);

    if (head?.left) {
        traverse(head.left, path);
    }

    if (head?.right) {
        traverse(head.right, path);
    }

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
