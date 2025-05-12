function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('erro')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('pasos invalido')
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p){
               res.innerHTML += `${c}` 
            }
        }
        
    }

    
}