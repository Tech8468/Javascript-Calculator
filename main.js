let opr=prompt("welcome to calculator\n you have to select an operator then two other number.\n Add) Addition,  \n Sub) Subtraction   \n Div) Division   \n Mul) Multiplication   \n Modu) Modulus")
let num1=parseInt(prompt("Enter the first number"))
let num2=parseInt(prompt("Enter the second number"))

// Introduction to Conditional Statement


if(opr=="Add"){
    let ans=num1+num2
    let message="Addition of "+num1+" and "+num2 +" is =" +ans
    alert(message)
}else if(opr==="Sub"){
    let ans=num1-num2
    let message="Subtraction of "+num1+" and " +num2+" is =" +ans
    alert(message)
}else if(opr==="Mul"){
    let ans=num1*num2
    let message="Multiplication of "+num1+" and " +num2+" is =" +ans
    alert(message)
}else if(opr==="Div"){
    let ans=num1/num2
    let message="Division of "+num1+" and " +num2+" is =" +ans
    alert(message)
}else{
    alert("Please reload and select a valid operator")
}



