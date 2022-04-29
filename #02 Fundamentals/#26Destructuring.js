// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'RUA ABC',
        numero:1000
    }
}

const { nome, idade } = pessoa // usando para executar uma váriavel dentro de uma chave... const {váriavel} = nome da const
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //atribuindo outros nomes para as variaveis retiradas das chaves
console.log(n, i) 

const { sobrenome, bemHumorada = true } = pessoa //sobrenome não existe ent ele dá como undefined e bemhumorada tmb n existe, mas teve o valor atrubuido como (TRUE)
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa //chamando as variaveis dentro de outro variavel e colocando cep para mostrar q não exitste 
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa //tentando acessar um var dentro de outro q não exista irá dar erro
console.log(ag, num)