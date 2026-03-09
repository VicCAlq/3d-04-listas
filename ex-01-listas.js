/*
Assunto 01 - Listas



------------------------------------------------------------------------------

Questões 01 a 08: Informe o índice correto do elemento solicitado
*/

/* Exercícios sobre Índices de Arrays (8 questões) */

/* Questão 1 */
/* Crie um array chamado `frutas` com as frutas: "maçã", "banana", "laranja", "uva". Acesse o segundo elemento do array e armazene na variável `resposta01`. */
const frutas = ["maçã", "banana", "laranja", "uva"];
const resposta01 = frutas[1];


/* Questão 2 */
/* Dado o array `numeros = [10, 20, 30, 40, 50]`, acesse o último elemento e armazene na variável `resposta02`. */
const numeros = [10, 20, 30, 40, 50];
const resposta02 = numeros[numeros.length - 1];


/* Questão 3 */
/* Com o array `cores = ["azul", "vermelho", "verde", "amarelo", "roxo"]`, altere o terceiro elemento para "preto" e armazene o array completo na variável `resposta03`. */
const cores = ["azul", "vermelho", "verde", "amarelo", "roxo"];
cores[2] = "preto";
const resposta03 = cores;


/* Questão 4 */
/* Dado o array `animais = ["cachorro", "gato", "pássaro", "peixe"]`, adicione um novo elemento "coelho" na posição 2 (índice 2) e armazene o array resultante em `resposta04`. */
const animais = ["cachorro", "gato", "pássaro", "peixe"];
animais[2] = "coelho";
const resposta04 = animais;


/* Questão 5 */
/* Com o array `letras = ["a", "b", "c", "d", "e", "f"]`, acesse o elemento no índice 4 e armazene em `resposta05`. */
const letras = ["a", "b", "c", "d", "e", "f"];
const resposta05 = letras[4];


/* Questão 6 */
/* Dado o array `valores = [5, 10, 15, 20, 25, 30]`, acesse os elementos dos índices 0 e 3 e armazene a soma deles na variável `resposta06`. */
const valores = [5, 10, 15, 20, 25, 30];
const resposta06 = valores[0] + valores[3];


/* Questão 7 */
/* Com o array `dias = ["segunda", "terça", "quarta", "quinta", "sexta"]`, verifique qual elemento está no índice 2 e armazene em `resposta07`. */
const dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
const resposta07 = dias[2];


/* Questão 8 */
/* Dado o array `pessoas = ["Ana", "Carlos", "Maria", "João"]`, altere o primeiro elemento para "Pedro" e armazene o array completo em `resposta08`. */
const pessoas = ["Ana", "Carlos", "Maria", "João"];
pessoas[0] = "Pedro";
const resposta08 = pessoas;

/* Questões 01 a 08: Informe o índice correto do elemento solicitado */

/* Questão 9 */
/* Crie um array vazio chamado `numeros` e use o método `push` para adicionar os números 1, 2, 3, 4 e 5. Armazene o array final em `resposta09`. */
const lista09 = [];
lista09.push(1, 2, 3, 4, 5);
const resposta09 = lista09;


/* Questão 10 */
/* Com o array `letras = ["x", "y", "z"]`, use o método `pop` para remover o último elemento e armazene o elemento removido em `resposta10`. */
const lista10 = ["x", "y", "z"];
const resposta10 = lista10.pop();


/* Questão 11 */
/* Dado o array `cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]`, use o método `unshift` para adicionar "Salvador" no início do array e armazene o array resultante em `resposta11`. */
const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.unshift("Salvador");
const resposta11 = cidades;


/* Questão 12 */
/* Com o array `frutas = ["maçã", "banana", "laranja"]`, use o método `shift` para remover o primeiro elemento e armazene o elemento removido em `resposta12`. */
const lista12 = ["maçã", "banana", "laranja"];
const resposta12 = lista12.shift();


/* Questão 13 */
/* Crie um array `pilha = [10, 20, 30]`. Use `push` para adicionar 40 e 50, depois use `pop` uma vez. Armazene o array final em `resposta13`. */
const pilha = [10, 20, 30];
pilha.push(40, 50);
pilha.pop();
const resposta13 = pilha;


/* Questão 14 */
/* Dado o array `fila = [1, 2, 3, 4, 5]`, use `shift` para remover o primeiro elemento e depois `push` para adicionar 6. Armazene o array final em `resposta14`. */
const fila = [1, 2, 3, 4, 5];
fila.shift();
fila.push(6);
const resposta14 = fila;


/* Questão 15 */
/* Com o array `nomes = ["João", "Maria", "José"]`, use `unshift` para adicionar "Ana" e "Pedro" no início, depois use `pop` para remover o último. Armazene o array final em `resposta15`. */
const nomes = ["João", "Maria", "José"];
nomes.unshift("Ana", "Pedro");
nomes.pop();
const resposta15 = nomes;


/* Questão 16 */
/* Crie um array vazio `lista`. Use `push` para adicionar "carro", "moto", "bicicleta". Depois use `shift` para remover o primeiro elemento. Armazene o elemento removido em `resposta16`. */
const veiculos = [];
veiculos.push("carro", "moto", "bicicleta");
const resposta16 = veiculos.shift();


/* Questão 17 */
/* Dado o array `numeros = [100, 200, 300, 400]`, use `pop` duas vezes e depois `unshift` para adicionar 50 no início. Armazene o array final em `resposta17`. */
const lista17 = [100, 200, 300, 400];
lista17.pop();
lista17.pop();
lista17.unshift(50);
const resposta17 = lista17;


/* Questão 18 */
/* Com o array `cores = ["azul", "vermelho"]`, use `push` para adicionar "verde" e "amarelo". Depois use `shift` para remover o primeiro elemento. Armazene o array final em `resposta18`. */
const cores = ["azul", "vermelho"];
cores.push("verde", "amarelo");
cores.shift();
const resposta18 = cores;


/* Questão 19 */
/* Crie um array `produtos = ["celular", "tablet", "computador"]`. Use `unshift` para adicionar "tv" no início, depois `pop` para remover o último. Armazene o elemento removido em `resposta19`. */
const produtos = ["celular", "tablet", "computador"];
produtos.unshift("tv");
const resposta19 = produtos.pop();


/* Questão 20 */
/* Dado o array `valores = [1, 2, 3]`, use `push` para adicionar 4, depois `shift` para remover o primeiro, depois `unshift` para adicionar 0 no início. Armazene o array final em `resposta20`. */
const lista20 = [1, 2, 3];
lista20.push(4);
lista20.shift();
lista20.unshift(0);
const resposta20 = lista20;

