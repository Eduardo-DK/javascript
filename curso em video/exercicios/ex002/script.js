function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value == 0) {
        window.alert('Verificar os dados!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade < 10) {
                // criança
                img.setAttribute('src', 'criançaH.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoH.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'H.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'homem'
            if (idade < 10) {
                // criança
                img.setAttribute('src', 'criançaM.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idosoM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectado ${genero} idade ${idade}`
        res.appendChild(img)
    }
    
}