function verific(){
    var nome = document.form.nome.value;
    var email = document.form.email.value;
    var cpf = document.form.cpf.value;

    //Verificação de posição da string (Retorna -1 se não encontrar a posição)
    var a = parseInt(email.indexOf("@"));
    alert(a);
    var p = parseInt(email.indexOf("."));

    var status = 0;

    if((nome=="")){
        alert("Campo nome obrigatório!");
        form.nome.focus();
        status = 1;
    }
    if((email=="")){
        alert("Campo e-mail obrigatório!");
        form.email.focus();
        status = 1;
    }
    if((a < 0) || (p < 0)){
        alert("E-mail inválido!");
        form.email.focus();
        status = 1;
    }

    if((cpf=="")){
        alert("Campo cpf obrigatório!");
        form.cpf.focus();
        status = 1;
    }
    if(status == 0){
        return true;
    }
    else{
        return false;
    }    
}