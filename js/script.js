function relogio () {
    //Acessa o atributo #relogio
    var horario = document.querySelector('#relogio');

    //Objeto Date
    let date = new Date();
    
    //Variáveis
    let hh, mm, ss;
    let hhFormatado, mmFormatado, ssFormatado;
    
    //Acessa os valores de hora, mes e ano;
    hh = date.getHours();
    mm = date.getMinutes();
    ss = date.getSeconds();
    
    //Coloca um zero na frente do numero se for menor que 10
    hhFormatado = hh < 10 ? "0" + hh : hh;
    mmFormatado = mm < 10 ? "0" + mm : mm;
    ssFormatado = ss < 10 ? "0" + ss : ss;

    //Mostra no DOM
    horario.textContent = `${hhFormatado} : ${mmFormatado} : ${ssFormatado}`;
    
    //Executa a função 'relogio()' a cada segundo
    let tempo = setTimeout(() => {
        relogio();
    }, 1000);
}

function data () {
    //Acessa o atributo #data
    var data = document.querySelector('#data');

    //Objeto Date
    let date = new Date();

    //Variáveis
    let diaDaSemana, diaDoMes, mes;

    //Verifica qual o dia atual da semana e retorna por escrito
    diaDaSemana = date.getDay();
    switch (diaDaSemana) {
        case 0:
            diaDaSemana = "domingo";
            break;
        case 1:
            diaDaSemana = "segunda-feira";
            break;
        case 2:
            diaDaSemana = "terça-feira";
            break;
        case 3:
            diaDaSemana = "quarta-feira";
            break;
        case 4:
            diaDaSemana = "quinta-feira";
            break;
        case 5:
            diaDaSemana = "sexta-feira";
            break;
        case 6:
            diaDaSemana = "sábado";
    }

    //Acessa o valor de dia do mes
    diaDoMes = date.getDate();

    //Verifica qual o atual mes do ano e retorna por escrito
    mes = date.getMonth();
    switch (mes) {
        case 0:
            mes = "janeiro";
            break;
        case 1:
            mes = "fevereiro";
            break;
        case 2:
            mes = "março";
            break;
        case 3:
            mes = "abril";
            break;
        case 4:
            mes = "maio";
            break;
        case 5:
            mes = "junho";
            break;
        case 6:
            mes = "julho";
        case 7:
            mes = "agosto";
            break;
        case 8:
            mes = "setembro";
            break;
        case 9:
            mes = "outubro";
            break;
        case 10:
            mes = "novembro";
            break;
        case 11:
            mes = "dezembro";
            break;
    }

    //Acessa o valor de ano
    ano = date.getFullYear();

    //Mostra no DOM
    data.textContent = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`
}

//Chama as funções
relogio()
data()