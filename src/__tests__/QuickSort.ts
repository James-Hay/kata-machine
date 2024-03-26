import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("quick-sort more unsorted", function () {
    const arr = [420, 3, 42, 4, 69, 5, 9];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 5, 9, 42, 69, 420]);
});
