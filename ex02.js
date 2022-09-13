function sumary(n) {
    let cont = 0;

    for (let i = 1; i <= n; i++) {
        if (i > 9 && i < 100) {
            cont = cont + 2
        }else if (i > 99) {
            cont = cont + 3
        }else {
            cont++
        }
    }
    
    console.log(cont)
}

console.log(sumary(256))