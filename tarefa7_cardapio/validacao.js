function buscar(){

    var data = new Date();

    var dia_mes = data.getDate();

    var mes = data.getMonth();

    var ano = data.getYear();

    var dia_sem = data.getDay();

    var dia_hoje = dia_mes + "/" + (mes+1) + "/" + (ano+1900);

    // alert("Captura de todos os dados: " + data);
    // alert("Captura do dia do mês: " + dia_mes);
    // alert("Captura do mês: " + mes);
    // alert("Captura do ano: " + ano);
    // alert("Captura do dia da semana: " + dia_semana);

    var semana = ["Domingo" , "Segunda-Feira" , "Terça-Feira" , "Quarta-Feira" , "Quinta-Feira" , "Sexta-Feira" , "Sábado"];

    var prato = ["Peixe" , "Feijoada" , "Carne Assada" , "Frango" , "Macarrão" , "Bisteca" , "Lasanha"];

    var sobrem = ["Frutas" , "Doce de Leite" , "Banana" , "Torta" , "Uva" , "Melancia" , "Laranja"];

    var prec = ["R$35,00" , "R$25,00" , "R$16,00" , "R$15,00" , "R$16,00" , "R$17,00" , "R$18,00"];

    var fig = ["fig1.jpg" , "fig2.jpg" , "fig3.jpg" , "fig4.jpg" , "fig5.jpg" , "fig6.jpg" , "fig7.jpg" ];

    document.form.hoje.value = dia_hoje;
    document.form.dia_semana.value = semana[dia_sem];
    document.form.prato_dia.value = prato[dia_sem];
    document.form.sobremesa.value = sobrem[dia_sem];
    document.form.preco.value = prec[dia_sem];

    var a = document.creatElement("img");
    a.src = fig[dia_sem];
    a.width = 250;
    a.height = 250;
    a.alt = "prato feito";
    document.body.appendChild(a);
}