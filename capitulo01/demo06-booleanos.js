// Como ela é False ela passa por dentro do IF
// const podeDirigir = false
// if (podeDirigir) {
//     console.log('Ela pode dirigir')
// } //False - Passa >> pelo IF


// Já a verdadeiro executa o IF
const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode dirigir')
}


// Saldo de Conta
const saldoEmConta = 0 // Zero sozinho é False
if (!saldoEmConta) {
    console.log('não tem saldo!')
}

// Força o valor a true e false
// De acordo com a tabela
const boolComString = "ae hackerzão"
console.log("boolComString",!!boolComString)

// Negação
console.log("negação", !boolComString)

// Negação + Forçar o Bool
console.log(
    'negacao + força a bool',
    !(!!boolComString)
)