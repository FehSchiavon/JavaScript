const minhaList= []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

// console.log(minhaListDeTarefas[0])
// console.log(minhaListDeTarefas[1])
// console.log(minhaListDeTarefas[4])

// Quantidade de itens no array
// console.log(minhaListDeTarefas.length)

// Adicionar item PUSH no FINAL
minhaListaDeTarefas.push('formatar computador')
// console.log(minhaListaDeTarefas)

// Remover Último da item da lista POP
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

// Remove o Primeiro item da lista SHIFT
// const primeiro = minhaListaDeTarefas.shift()
// console.log(primeiro, minhaListaDeTarefas)

// Remover um item especifico a partir de um indice SPLICE
// console.log(minhaListaDeTarefas)
// Qual é o Indice
// Qual é a Quantidade
// minhaListaDeTarefas.splice(2, 1)
// minhaListaDeTarefas.splice(numedoDoIndice, quantidadeQueSeraRemovida)
// console.log(minhaListaDeTarefas)

// Verificar o tipo do Array
const itens = [
    1, 'computador', 0.22
]

// console.log(typeof(itens))

// Verificar se é Array da Forma Certa
// console.log(Array.isArray(itens))

// Ordenar Numeros SORT
// const numero = [3,2,1,0]
// const texto = ['z', 'x', 'v', 'b', 'a']
// console.log(numero.sort())
// console.log(texto.sort())

// JUNTAR dois Arrays CONCAT
// const novo = itens.concat([1,2,3])
// console.log(novo)

// JUNTAR Array em uma String JOIN
// console.log(itens.join(', '))

// Verificar o INDICE de um Array INDEXOF
const index = itens.indexOf('computador')
console.log(index)
console.log(itens[index])