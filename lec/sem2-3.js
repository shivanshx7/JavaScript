function calculate(num1,num2,op){
    if (op === "*"){
        console.log(num1*num2)
    }else if(op === "+"){
        console.log(num1+num2);
        
    }else if(op === "-"){
        console.log(num1-num2);
        
    }else{
        console.log(num1/num2);
        
    }

}
calculate(1,4,"-")