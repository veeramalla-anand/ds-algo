/*let arr = [1,2,3,4,5,6,7,8,10];
const findmissingnumber = (arr) => {
    for (var i = 0;i < arr.length - 1;i++) {
        if (arr[i] + 1 !=arr[i + 1]){
            return arr[i]+1;
        }
    }
    return false;   
}
console.log(findmissingnumber(arr));*/

//another method
function missingnumber(arr) {
    var n = arr.length+1;
    sum = 0;
    expectedSum = n*(n+1)/2;

    for (var i = 0,len = arr.length; i < len; i++){
        sum += arr[i];
    }
    return expectedSum - sum; 
}
missingnumber([3,6,2,5,1])
console.log(missingnumber())