// Concatenação [Junta String + Number]
let salarioDoAmigo = 1000
let meuSalario ="2999"

// Soma dos Salarios, porém esta ERRADO 
console.log(salarioDoAmigo + meuSalario)




// Validação e Identificação da Variaveis
// Salario do Amigo
console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)
// Meu Salario
console.log(
    typeof(meuSalario),
    meuSalario
)




// Como Poderia Corrigir o Salario de String para Number 
// Sem mexer na variavel [Fica assim]:
let meuSalarioCorrigido = Number(meuSalario)
// Soma agora CORRIGIDA
console.log(salarioDoAmigo + meuSalarioCorrigido)




// Vamos se por que tivesse texto dentro da variveis do seu cliente
// Viria um variavel assim mais o menos:
// NaN é igual [Not a Number]

let meuSalarioComTexto = "1000aaa"
// Validar o tipo
console.log(
    typeof(meuSalarioComTexto)
)
// True é que tem texto misturado // False é que não tem texto
console.log(
    isNaN(meuSalarioComTexto)
)