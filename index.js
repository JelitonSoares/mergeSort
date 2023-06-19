const { homens, mulheres } = require('./clientes.js');

function mergeSort(arr1, arr2){
    let n1 = arr1.length;
    let n2 = arr2.length;
    let i1 = 0;
    let i2 = 0;
    let arrFinal = [];

    while(i1 < n1 && i2 < n2){
        if(arr1[i1].idade < arr2[i2].idade){
            arrFinal.push(arr1[i1]);
            i1++;
        } else {
            arrFinal.push(arr2[i2]);
            i2++;
        }
    }

    while(i1 < n1){
        arrFinal.push(arr1[i1]);
        i1++;
    }

    while(i2 < n2){
        arrFinal.push(arr2[i2]);
        i2++;
    }

    return arrFinal;
}

console.log(mergeSort(homens, mulheres));