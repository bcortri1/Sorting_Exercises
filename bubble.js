function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let k = 0; k < arr.length-i; k++){
            if(arr[k] > arr[k+1]){
                swapped = true;
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
        }
        if (!swapped){
            return arr;
        }
    }
    return arr;
}

module.exports = bubbleSort;