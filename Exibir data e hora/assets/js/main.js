const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo','segunda','terça','quarta','quinta','sexta','sabado'];
    return diasSemana [diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['1','2','3','4','5','6','7','8','9','10','11','12']
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);


    return( 
    `${nomeDia}, ${data.getDate()}-${zeroAEsquerda(nomeMes)}` +
    `-${data.getFullYear()} ` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data);

/*const h1 = document.querySelector('.container h1');
const data = new Date()
const opcoes = {
    dataStyle: 'full'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);*/
