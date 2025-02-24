function Calcular() {
    let n = document.getElementById('n1')
    let tab = document.getElementById('tab')
    if (n.value.length == 0){
        window.alert('Digite um numero')
    } else { 
        tab.innerHTML = ''
        var num = Number(n.value)
        
        for(var c = num; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
       /* while (c <= 10) { 
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }*/
 }
}