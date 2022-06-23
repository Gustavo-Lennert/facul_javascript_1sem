function tabu(){

    var tabuada = "";
    var resp = document.getElementById('resposta');
    var num = parseInt(document.formulario.numero.value);

    for(var i=1; i<=10; i++){
        tabuada += num + " x " + i + " = " + (num * i) + "<br>";
    }
    document.formulario.numTab.value=num;
    resp.innerHTML=tabuada;
}