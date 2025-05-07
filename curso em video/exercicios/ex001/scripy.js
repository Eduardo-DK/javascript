function carregar () {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora < 12 && hora > 0){
        img.src = 'img/amanhecer.jpg'
        document.body.style.background = '#44ff33'
    }
    else if (hora > 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#3380ff'
    } 
    else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#9733ff'
    }
}
