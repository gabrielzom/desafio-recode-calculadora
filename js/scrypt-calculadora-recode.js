Calcular = () => {

    //========================== Declarações e atribuições de variáveis ============================ //
    let operador =  document.getElementById("operador")
    let operando =  document.getElementById("operando")
    let operacao =  document.getElementById("operacao")
    let resultado = document.getElementById("resultado")
    
    //========================== Início do tratamento de exceções =========================== //
    if (operando.value == '' || operador.value == '' || operacao.value == '--Selecione uma operação') {
        alert('Não é possível deixar os campos em branco. Tente novamente')

    } else if (operando.value == '0' && operacao.value == '4' ) {
        alert('Não é possível dividir um número por 0. Tente novamente.')
        operando.value = ''
    //========================== Fim do tratamento de exceções ============================ //

    } else {

        //========================== Início das operações ============================ //
        switch (operacao.value) {
            case '1':
            resultado.value = Number(operador.value) + Number(operando.value) 
            break

            case '2':
            resultado.value = Number(operador.value) - Number(operando.value) 
            break

            case '3':
            resultado.value = Number(operador.value) * Number(operando.value) 
            break

            case '4':
            resultado.value = Number(operador.value) / Number(operando.value) 
        }
        //========================== Fim das operações ============================ //


        //================ Tratamento de exceções no resultado =================== //
        if (resultado.value == 'NaN') {
            alert('Use apenas números nos campos. Tente novamente')
            operacao.value = '--Selecione uma operação'
            operando.value = ''
            operador.value = ''
            resultado.value = ''
        }
    }
}