// Right rotate an array  by one places

const rightRotateArrayByOnePlaces = (arr) =>{
    const n = arr.length;
    if(n === 0) return;

    const temp = arr[n-1];

    for(let i = n-1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
}


const arr = [1, 2, 3, 4, 5];
rightRotateArrayByOnePlaces(arr);
console.log(arr);