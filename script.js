function gerar() {
    var tnum = document.querySelector('input#txtnum')
    var num = Number(tnum.value)
    var res = document.querySelector('div#result')

    res.innerHTML = `Oi ${num}`
}