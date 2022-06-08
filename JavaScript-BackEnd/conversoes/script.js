//tipo de dado
//booleanos

//conversão implicita
const numero = 456
const numeroString = '456'

//Number()
//String()
//Sem o parseInt o código iria concatenar apenas, e ficar 456456, com o parseInt convertemos o numeroString para número inteiro, dessa forma o código soma ao invés de concatenar.
console.log(numero + parseInt(numeroString))

//conversão explícita
