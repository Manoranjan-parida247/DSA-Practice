// Second Largest Element in an Array without sorting

const secondLargest = (arr)=>{
    let max = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max2 = max;
            max = arr[i];
        }else if(arr[i] > max2 && arr[i] < max){
            max2 = arr[i];
        }
    }
    return max2;
}



const nums = [1, 2,2, 3, -4, 5];
console.log(secondLargest(nums))