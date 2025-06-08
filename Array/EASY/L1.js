// largest element in array 


const largestNum2 = (arr) =>{
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}
const largestNum =(arr) => {
    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


const nums = [3, 3, 0, 99, -40];
const largest = largestNum2(nums);
console.log(largest);