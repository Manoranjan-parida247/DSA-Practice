// The intersection of two arrays is a new array that contains only the elements that are common to both arrays.

const intersectionSorted = (arr1, arr2) => {
    const n = arr1.length;
    const m = arr2.length;
    let i = 0, j = 0;
    const result = [];

    while (i < n && j < m) {
        if (arr1[i] === arr2[j]) {
            // Avoid duplicates in result
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

// Test case
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 3, 5];
console.log(intersectionSorted(arr1, arr2)); // Output: [2, 3]

// Time & Space Complexity:
// Time: O(n + m)

// Space: O(min(n, m)) for result array