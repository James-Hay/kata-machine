function qs(arr: number[], low: number, high: number) {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low - 1;

    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            idx++;

            // everything less than the pivot goes to the left
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // everything greater than the pivot value goes to the right
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
