function traverse(head: BinaryNode<number> | null, needle: number): boolean {
    if (!head) {
        return false;
    }

    if (head?.value === needle) {
        return true;
    }

    if (head.value < needle) {
        return traverse(head.right, needle);
    }

    if (head.value >= needle) {
        return traverse(head.left, needle);
    }

    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return traverse(head, needle);
}
