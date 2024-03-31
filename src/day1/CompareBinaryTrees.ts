function traverse(
    aHead: BinaryNode<number> | null | undefined,
    bHead: BinaryNode<number> | null | undefined,
): boolean {
    if (aHead === null && bHead === null) {
        return true;
    }

    if (aHead === null || bHead === null) {
        return false;
    }

    if (aHead?.value !== bHead?.value) {
        return false;
    }

    return (
        traverse(aHead?.left, bHead?.left) ===
        traverse(aHead?.right, bHead?.right)
    );
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return traverse(a, b);
}
