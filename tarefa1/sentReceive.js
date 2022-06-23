function receive(){
    /*Criar variável e armazenar o valor recebido no formulário*/
    var info = document.form.nome.value;

    /*Enviar o valor da variável para o input de resposta */
    document.form.user.value=info;
}