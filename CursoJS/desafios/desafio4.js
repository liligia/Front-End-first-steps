var bota1 = document.getElementById('lulu')
const button = document.createElement('button')
button.textContent = 'Comprar produto'

button.addEventListener('click', () => {
    var compra = window.prompt('Qual produto você quer comprar?')
    var preco = window.prompt('Qual o valor do item que está comprando?')
    var troco = window.prompt(`Qual o valor que você deu para pagar ${compra}?`)
    window.alert(`O valor da mochila é ${preco}. Você pagou ${troco}. Seu troco é ${troco-preco}.`)
})
bota1.appendChild(button)