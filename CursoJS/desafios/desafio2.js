var botao = document.getElementById('lulu')
const button = document.createElement('button');
button.textContent = 'Inicie o desafio';

// Add event listener to the button
button.addEventListener('click', (name, age) => {
    button.name = name 
    button.age = age
  var name = window.prompt('What is your name?')
  var age = window.prompt(`Hello, ${name}! How old are you?`)
  window.alert(`Prazer em conhecer, ${name} que tem ${age}!`)
});



// Add the button to the document body (or any other element)
botao.appendChild(button);