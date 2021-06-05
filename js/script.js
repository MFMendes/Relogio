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
    horario.textContent = `${hhFormatado}:${mmFormatado}:${ssFormatado}`;
    
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

    //Verifica qual o dia atual da semana e retorna por escrito
    var diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']

    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    

    //Mostra no DOM
    data.textContent = `${diasDaSemana[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
}

//Chama as funções
relogio()
data()