function gerar() {
    var tnum = document.querySelector('input#txtnum')
    var res = document.querySelector('select#result')

    if (tnum.value.length == 0) {
        window.alert('Por favor insira um número')
    } else {
        var num = Number(tnum.value)
        var mult = 1
        res.innerHTML = '' //antes de gerar a tabuada, ele limpa a área de resultado. Sem isso, cada vez que a pessoa digitar um número e gerar a tabuada, o resultado vai aparecer abaixo do que ela digitou anteriormente.
        while (mult <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${mult} = ${num*mult}`
            res.appendChild(item)
            mult++
        }
    }
}