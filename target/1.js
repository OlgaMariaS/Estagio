/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
*/

//Função que calcula se N pertecene ou não a sequência de Fibonacci
function fibonacci(n) {
    let primeiro = 1, segundo = 2, proximo;

    //Laço de repetição responsável por encontrar os elementos de Finonacci
    while (segundo < n) {
        proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
    }   

    //Retorna se o elemento encontrado é ou não igual a N
    if (segundo === n) {
        return n + " pertence a sequencia de Fibonacci";
    } else {
        return n + " NÃO pertence a sequencia de Fibonacci";
    }
}

//Impressão esperada "Pertence a sequencia de Fibonacci"
console.log(fibonacci(5));

//Impressão esperada "Não pertence a sequencia de Fibonacci"
console.log(fibonacci(27));

