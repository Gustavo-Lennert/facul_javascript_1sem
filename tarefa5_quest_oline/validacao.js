//Declaração de variáveis globais (que podem ser utilizadas em qualquer função que for necessário)
var acertos=0;
var erros=0;

//Criação da função de recepção de campos
function id(){

    //Campo nome
    var nome=window.prompt("Identifique-se por favor","Digite seu nome");

    //Campo E-mail
    var email=window.prompt("Digite seu e-mail","E-mail");

    //Comando para receber os campos "nome" e "email", e passar para maiúscul(UpperCase) e minúsculo(LowerCase)
    document.formulario.formNome.value=nome.toUpperCase();
    document.formulario.formEmail.value=email.toLowerCase();

    //Comando para deixar desabilitado a edição após o preenchimento dos campos
    document.formulario.formNome.disabled=true
    document.formulario.formEmail.disabled=true
    document.formulario.enviar.disabled=true
    document.formulario.formAcertos.disabled=true
    document.formulario.formErros.disabled=true
}

//Função de reposta ao clicar no botão de envio
function Enviar(){
    alert("Resultados Enviados!")
}

//Função de recepção da resposta da pergunta
function verifica1(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    //Desabilita as questões após selecionar uma alternativa
    document.formulario.op1.disabled=true;
    document.formulario.op2.disabled=true;
    document.formulario.op3.disabled=true;
    document.formulario.op4.disabled=true;
}

function verifica2(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op5.disabled=true;
    document.formulario.op6.disabled=true;
    document.formulario.op7.disabled=true;
    document.formulario.op8.disabled=true;
}
function verifica3(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op9.disabled=true;
    document.formulario.op10.disabled=true;
    document.formulario.op11.disabled=true;
    document.formulario.op12.disabled=true;
}
function verifica4(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op13.disabled=true;
    document.formulario.op14.disabled=true;
    document.formulario.op15.disabled=true;
    document.formulario.op16.disabled=true;
}
function verifica5(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op17.disabled=true;
    document.formulario.op18.disabled=true;
    document.formulario.op19.disabled=true;
    document.formulario.op20.disabled=true;
}

function verifica6(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op21.disabled=true;
    document.formulario.op22.disabled=true;
    document.formulario.op23.disabled=true;
    document.formulario.op24.disabled=true;
}
function verifica7(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op25.disabled=true;
    document.formulario.op26.disabled=true;
    document.formulario.op27.disabled=true;
    document.formulario.op28.disabled=true;
}
function verifica8(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op29.disabled=true;
    document.formulario.op30.disabled=true;
    document.formulario.op31.disabled=true;
    document.formulario.op32.disabled=true;
}

function verifica9(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op33.disabled=true;
    document.formulario.op34.disabled=true;
    document.formulario.op35.disabled=true;
    document.formulario.op36.disabled=true;
}

function verifica10(rec){
    if(rec==1){
        acertos++;
    }
    else{
        erros++;
    }

    document.formulario.op37.disabled=true;
    document.formulario.op38.disabled=true;
    document.formulario.op39.disabled=true;
    document.formulario.op40.disabled=true;


    //Comando para deixar habilitado a edição após o preenchimento dos campos
    document.formulario.formNome.disabled=false
    document.formulario.formEmail.disabled=false
    document.formulario.enviar.disabled=false
    document.formulario.formAcertos.disabled=false
    document.formulario.formErros.disabled=false

    //Atribuição da quantidade de erros e acertos nos campos de resultado
    document.formulario.formAcertos.value=acertos;
    document.formulario.formErros.value=erros;

    //Comando para deixar desabilitado a edição após o preenchimento dos campos
    document.formulario.formNome.disabled=true
    document.formulario.formEmail.disabled=true
    document.formulario.formAcertos.disabled=true
    document.formulario.formErros.disabled=true
    

}

