// Variáveis
let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

// Início do onclick='adicionar()'
function isNumero(n){
    // Verificar se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    // Verificar se a lista não está vazia
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    // Verifica número entre 1 e 100 e se não está na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // adiciona na lista
        let item = document.createElement("option") 
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}
// Fim do onclick='adicionar()'

// Início do onclick='finalizar()'
function finalizar(){
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadatrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
// Fim do onclick='finalizar()'