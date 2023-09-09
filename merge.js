function merge(sArr1, sArr2) {
    let i = 0;
    let k = 0;
    let resultArr = [];
    while (i < sArr1.length && k < sArr2.length) {
        if (sArr1[i] < sArr2[k]) {
            resultArr.push(sArr1[i]);
            i++;
        }
        else {
            resultArr.push(sArr2[k]);
            k++;
        }
    }
    while (i < sArr1.length) {
        resultArr.push(sArr1[i]);
        i++;
    }
    while (k < sArr2.length) {
        resultArr.push(sArr2[k]);
        k++;
    }
    return resultArr;
}

function mergeSort(arr) { 
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

module.exports = { merge, mergeSort };