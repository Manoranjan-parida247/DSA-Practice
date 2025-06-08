// Right rotate an array by D places 

const rightRotateBruteForce = (arr, d) => {
    const n = arr.length;
    d = d % n; // Handle d > n

    // Step 1: Store last d elements
    const temp = [];
    for (let i = n - d; i < n; i++) {
        temp.push(arr[i]);
    }

    // Step 2: Shift remaining elements to the right
    for (let i = n - 1; i >= d; i--) {
        arr[i] = arr[i - d];
    }

    // Step 3: Copy temp elements to front
    for (let i = 0; i < d; i++) {
        arr[i] = temp[i];
    }

    return arr;
};

// Test case
const arr = [1, 2, 3, 4, 5];
rightRotateBruteForce(arr, 2);
console.log(arr); // Output: [4, 5, 1, 2, 3]




// optimal 
const reverse = (arr, start, end) => {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

const rightRotateByD = (arr, d) => {
    const n = arr.length;
    d = d % n; // handle if d > n

    reverse(arr, n - d, n - 1);     // Step 1
    reverse(arr, 0, n - d - 1);     // Step 2
    reverse(arr, 0, n - 1);         // Step 3

    return arr;
};

// Test case
const arr2 = [1, 2, 3, 4, 5];
rightRotateByD(arr2, 2);
console.log(arr2); // Output: [4, 5, 1, 2, 3]
