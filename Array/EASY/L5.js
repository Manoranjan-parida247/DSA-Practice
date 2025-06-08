// The union of two arrays is a new array that contains all distinct (non-repeating) elements from both arrays.

// Brute force approach

const union = (arr1, arr2) => {
    const result = [];

    // Step 1: Add all elements from arr1
    for (let i = 0; i < arr1.length; i++) {
        if (!isPresent(result, arr1[i])) {
            result.push(arr1[i]);
        }
    }

    // Step 2: Add all elements from arr2
    for (let i = 0; i < arr2.length; i++) {
        if (!isPresent(result, arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
};

const isPresent = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true;
    }
    return false;
};

// Test case
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 5];
const result = union(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 4, 5]

Time & Space Complexity:
Time: O(n * m) (worst case, for checking duplicates)

Space: O(n + m) (for result array)


// ---------------------------------------------------

// Optimal (sorted arrays)
const unionSorted = (arr1, arr2) => {
    const n = arr1.length;
    const m = arr2.length;
    let i = 0, j = 0;
    const result = [];

    while (i < n && j < m) {
        // Avoid duplicates in result
        if (arr1[i] === arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j++;
        }
    }

    // Add remaining elements of arr1
    while (i < n) {
        if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }

    // Add remaining elements of arr2
    while (j < m) {
        if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
};

// Test case
const arr1 = [1, 2, 2, 4, 5];
const arr2 = [2, 3, 5, 6];
console.log(unionSorted(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

Time and Space Complexity:
Time: O(n + m)

Space: O(n + m) (result array)

