let num = document.getElementById('fnum')   
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
    
}

function inlist(vetor, num) {
    let n = (Number(num.value))
    return !vetor.includes(n)
}

function adicionar() {
    
    if (isNumero(num.value) && inlist(valores, num)) {
        valores.push (Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicionar valores')
    } else {    
        let totalN = valores.length
        let maior = Math.max(...valores)
        let soma = 0
        let media = soma / totalN
        for(let i = 0; i < valores.length; i++)
            soma += valores[i]
        
        res.innerHTML = [`
            o tamanho do vetor ${totalN} <br>   
            o maior numero é ${maior} <br>
            a soma entre os numeros é ${soma} <br>
            a media entre os numeros é ${media} <br>
        `]
    }
}
