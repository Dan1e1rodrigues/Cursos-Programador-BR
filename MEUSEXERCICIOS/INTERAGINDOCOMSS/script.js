function ativa() {

    //Dependendo do valor 0,1,2...Será selecionado o mês correto
    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')

    //Dependendo do valor 0,1,2...Será selecionado o dia da semana correto
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    //Assim tendo que usar um Array para pecorrer e descobrimos qual será o correto.

    //----------------------------------------------------
    //Após aqui as funçoes de data, mês, semana, assim por diante irão percorrer
    let agora = new Date

    let saida =document.getElementById('saida')

    let dia = agora.getDate()

    // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let mes = agora.getMonth() 

    let ano = agora.getFullYear()

    // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let sem = agora.getDay()  

    let hora = agora.getHours()

    let min = agora.getMinutes()

    let seg = agora.getSeconds()


    //Uma dica importante e que quando for usar o innerHTML para separar os itens por linha e preciso colocar o "+=" e dentro adicionar a tag <p> para assim separar os itens um do outro, caso contrario todos ficaram na mesma linha. 
    saida.innerHTML += `<p>Dia: <mark>${dia}</mark></p>`

    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`

    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`

    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`

    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`

    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`

    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`


}

