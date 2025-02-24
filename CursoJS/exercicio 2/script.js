function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value > ano || fAno.value.length == 0){
    window.alert(`[ERRO] Digite outro ano, por favor.`)
    } else {
    var sex = document.getElementsByName(`txtsexo`)
    var idade = ano - Number(fAno.value)
    var gender = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sex[0].checked) {
        gender = 'Rapaz'
        if (idade > 0 && idade < 10) {
            // criança
            console.log('batata1')
            img.setAttribute('src', 'pexels-artur-roman-1167355.jpg')
        } else if (idade < 21) {
            //Jovem
            console.log('batata2')
            img.setAttribute('src', 'Modelo/pexels-artur-roman-1167355.jpg')
        } else if (idade < 60) {
            // Adulto
            console.log('batata3')
            img.setAttribute('src', 'Modelo/pexels-artur-roman-1167355.jpg')
        } else {
            // Idoso
            console.log('batata 4')
            img.setAttribute('src', 'Modelo/pexels-artur-roman-1167355.jpg')
        }
    } else if (sex[1].checked) {
        gender = 'Donzela'
        if (idade > 0 && idade < 10) {
            // criança
        } else if (idade < 21) {
            //Jovem
        } else if (idade < 60) {
            // Adulto
        } else {
            // Idoso
        }
    } else if (sex[2].checked) {
        gender = 'Indivíduo'
        if (idade > 0 && idade < 10) {
            // criança
        } else if (idade < 21) {
            //Jovem
        } else if (idade < 60) {
            // Adulto
        } else {
            // Idoso
        }
    }
    res.style.textAlign = 'center'
     res.innerHTML= `Você é 1 ${gender} de ${idade} anos.<br>`
     res.appendChild(img)
    }
}