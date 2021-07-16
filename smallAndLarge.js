const arr = [25,55,78,100];
const FindMinMax =(arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i =0; i<arr.length; i++) { 
        if (arr[i]>max){
            max = arr[i];
        }else if (arr[i]<min){
            min = arr[i];   
        }
    }
    return {
        "MAX" : max,
        "MIN" : min
    }
}
console.log(FindMinMax(arr));