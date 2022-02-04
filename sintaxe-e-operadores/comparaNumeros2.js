//gostaria que me desse um feedback sobre essa forma que encontrei pra resolver o exercício. Obrigado.
function testando(num1, num2){
  const soma = num1 + num2
  const menorQueDez = soma < 10;
  const menorQueVinte = soma < 20;


  if(soma < 0){
    return `O resultado da soma entre ${num1} e ${num2} é ${soma}, esse número é negativo.`
  }
  else if(menorQueDez){
    return `O resultado da soma entre ${num1} e ${num2} é ${soma}, esse número é menor que dez.`
  }else if (!menorQueDez && menorQueVinte ) {
    return `O resultado da soma entre ${num1} e ${num2} é ${soma}, esse número é maior que dez e menor que vinte.`
  } 
}
console.log(testando(5, 6))
