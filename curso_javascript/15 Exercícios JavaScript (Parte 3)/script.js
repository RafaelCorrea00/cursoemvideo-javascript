function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img") // Criando um novo elemento
        img.setAttribute("id", "foto") // Atribuindo Id para o novo elemento
        if (fsex[0].checked) {
            // Checando Sexo Masculino
            genero = "Homem"
            if ( idade >= 0 && idade < 10) {
                // Criança | Menino
                img.setAttribute("src", "./images/foto-bebe-m.png") 
            } else if (idade < 21) {
                // Jovem | Moço
                img.setAttribute("src", "./images/foto-jovem-m.png")
            } else if (idade < 50) {
                // Adulto | Homem
                img.setAttribute("src", "./images/foto-adulto-m.png")
            } else {
                // Idoso | Senhor
                img.setAttribute("src", "./images/foto-idoso-m.png")
            }
        } else if(fsex[1].checked) {
            // Checando Sexo Feminino
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança | Menina
                img.setAttribute("src", "./images/foto-bebe-f.png")
            } else if ( idade < 21) {
                // Jovem | Moça
                img.setAttribute("src", "./images/foto-jovem-f.png")
            } else if (idade < 50) {
                // Adulto | Mulher
                img.setAttribute("src", "./images/foto-adulto-f.png")
            } else {
                // Idoso | Senhora
                img.setAttribute("src", "./images/foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adicionando a Imagem no HTML
    }
}