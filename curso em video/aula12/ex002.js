var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora}h`)
if (hora < 12) {
    console.log('bom dia');
}
else if (12 < hora < 18) {
    console.log('boa tarde');
}
else {
    console.log('boa noite'); 
}


