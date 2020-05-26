// Variaveis criadas com _Inderline no como é que ela não pode ser acessada por fora

const pessoa = {
    _nome: '',
    _idade: 20,
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = "maria do ceú"
console.log (pessoa.nome)
// Isso é chamado de Variavel Calculada 
pessoa.idade = 16
console.log(pessoa.podeDirigir)



// Desafio de Get/Set
const animal = {
    _id: '123',
    get id() {
        return this._id
    },

    _idade: '123',
    set idade(valor) {
        this._idade = valor
    }
}

// ID
console.log(animal.id)
// IDADE
// animal.idade = 10
// console.log(animal.idade)