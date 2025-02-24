let n = document.getElementById('n1')
let calcular = document.getElementById('Final')
let array = []

function Adicionar(){
    var stupidnumber = parseInt(n.value)
    if (n.value.length == 0 || n.value > 100 || n.value < 1){
        window.alert('Digite um numero válido')
    } if (array.includes(stupidnumber)) {
        window.alert('Você já digitou esse número')
        n.value = '' 
        return
    } else {
        var num = Number(n.value)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        calcular.appendChild(item)
    
    }
        array.push(num)
        n.value = ''   
 }
 
function Analisar (){

    let resposta = document.getElementById('res')
    array.sort()
    let soma = 0
    let big = array[array.length - 1]
    let small = array[0]
    for(let i = 0; i < array.length; i++) {
        soma += array[i]
    }

    resposta.innerHTML = `Ao todo, temos ${array.length
    } números cadastrados.<br><br>O maior valor informado foi ${big}.<br><br> O menor valor informado foi ${small}.<br> <br> Somando todos os valores, temos ${soma} <br><br> A média dos valores digitados é ${soma/array.length}.`
}

/*
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista (n, 1) {
    if(1.indexOf(Number(n) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {
        valores.push{Number(num.value)}
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicional.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
}
num.value = ''
num.focus()
} 
function finalizar () {
    if (valores.length ==0) {
        window.alert('Adicione valores antes de finalzar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores [pos]
            if (valores[pos] > maior){
            maior= valores[pos] }

        if(valores[pos] < menor) {
            menor = valores[pos])
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados.`
        res.innerHTML += `O menor valor informado foi ${menor}`
        res.innerHTML += `O maior valor informado foi ${maior}`
        res.innerHTML += `Somando todos os valores, temos ${soma}.`
    }
}
        */
