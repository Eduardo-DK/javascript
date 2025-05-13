function calcular() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('ERROr')
    } else {
        let n = Number(num.value)
        let c = 0
        res.innerHTML = ''
        for(1 ; c <= 10; c += 1)
            res.innerHTML += `${n} x ${c} = ${c * n} <br>`
    }

    /* res.innerHTML = 'olá' */
}