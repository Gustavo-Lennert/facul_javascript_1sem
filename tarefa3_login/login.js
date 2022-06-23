function validation(){
    var nome = document.formLog.nome.value;
    var senha = parseInt(document.formLog.senha.value);

    if((nome=="gusta")&&(senha==1234)){
        return true;
    }
    else{
        alert("Dados incorretos!");
        return false;
    }
}