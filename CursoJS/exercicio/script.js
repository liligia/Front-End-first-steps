function carregar() {
var msg = window.document.getElementById('msg')
var oie = window.document.getElementById('saudacao')
var dia = window.document.getElementById('fotografia')
var data = new Date()
// var hora = data.getHours()
var hora = 23
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 0 && hora < 12) {
    oie.innerHTML = 'BOM DIA!'
    dia.src = 'pexels-artur-roman-1167355.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    oie.innerHTML = 'BOA TARDE!'
    dia.src = 'pexels-george-desipris-858241.jpg'
    document.body.style.background = '#b9846f'
} else {
    oie.innerHTML = 'BOA NOITE!'
    dia.src = 'pexels-photo-1906658.jpeg'
    document.body.style.background = '#000000'
    }
}
