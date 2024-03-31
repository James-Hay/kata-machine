function traverse(head: BinaryNode<number>, path: number[]): number[] {
    if (head?.left) {
        traverse(head.left, path);
    }

    if (head?.right) {
        traverse(head.right, path);
    }

    path.push(head.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
