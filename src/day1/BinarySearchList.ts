export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const currentValue = haystack[mid];

        if (currentValue === needle) {
            return true;
        } else if (currentValue > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);

    return false;
}
