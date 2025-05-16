let num = document.getElementById('fnum')   
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = ['1']

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
    
}

function inlist(vetor, num) {
    return !vetor.includes(num)
}

function adicionar() {
    if (isNumero(num.value) && inlist(valores, num.value)) {
        alert('ok')
    } else {
        alert('valor invalido')
    }
}