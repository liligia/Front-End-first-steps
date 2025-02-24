function Verificar(){
let ini = document.getElementById('inicio')
let fim = document.getElementById('fim')
let pula = document.getElementById('skip')
var result = document.getElementById('result')
    if (ini.value.length == 0 || fim.value.length == 0|| pula.value.length == 0){
        window.alert(`Tente outros numeros.`)
    } else {
        result.innerHTML = 'Contando:'
        let c = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (pula.value)
        if (p<= 0) {
            p = 1
        }
        for (var x = c; x <= f; x = x + p) {
            result.innerHTML += `${x} \u{1F499}`
        }
        result.innerHTML += `\u{1F3C1}`
    }
 }
/* }
while (c <= f){
    result.innerHTML = `${c}`
    c = c + p 
}
// for(var c = Number (ini.value); c <= Number (fim.value); c+Number(pula.value)) {
    // result.innerHTML = `${c}`
    // } 
    console.log('Fim')
}*/
