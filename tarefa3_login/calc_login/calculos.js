function calculos(info){
    var num1 = parseInt(document.formCalc.number1.value);
    var num2 = parseInt(document.formCalc.number2.value);
    var result=0;

    if(info==1){
        result = num1 + num2;
    }
    if(info==2){
        result = num1 * num2;
    }
    if(info==3){
        result = num1 - num2;
    }
    if(info==4){
        result = num1 / num2;
    }
    document.formCalc.result.value = result;
}

