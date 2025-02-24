var resultado = getElementById('lulu')
var titulo = querySelector('#grande')
function batata() {
    var distancia = window.prompt('Digite uma distância em metros(m)')
    var km = distancia/1000
    var hm = distancia/100
    document.write(`<h1>A distância de ${distancia} metros, corresponde a...</h1><br>${km.toFixed(3)}(Km)<br>${hm.toFixed(3)}(Hm)`)

}
