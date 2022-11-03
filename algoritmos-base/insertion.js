function random(qnt) {
    let arr = []
    let cont = 0
    while (cont<10) {
        arr.push(Math.floor(Math.random()*qnt))
        cont++
    }
    return arr
}


function insertionSort(arr) {
    let atual
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        atual = arr[i]
        while (j >= 0 && atual < arr[j]) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = atual
    }
    return arr
}

let rand = random(10)

console.log(rand)

console.log(insertionSort(rand))