var n = 5;
var arr = [3,2,1,3,2];

for(let i = 0; i<n; i++){
    if(i%2===0){
        if(i+1<n){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}

console.log(arr);