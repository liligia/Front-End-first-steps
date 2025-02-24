var botao = document.querySelector('#lulu')
const button = document.createElement('button')
button.textContent = 'Antecessor e sucessor'

button.addEventListener('click', (num) => {
    button.num = num
    var num = window.prompt('Digite um número inteiro qualquer:')
    var n2 = num - 1
    var n3 = parseInt(num) + 1
        window.alert(`Antes do ${num} temos o ${n2}.\n Depois do ${num} temos o ${n3}`)
    
})

botao.appendChild(button)