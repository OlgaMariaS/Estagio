/* 
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
além de informar a quantidade de vezes em que ela ocorre.
*/

function encontrar_A(palavra) {
    let qtde_As = 0;
    let encontrado = false;

    //Percorre a palavra verificando cada caractere se é igual a 'a' ou 'A'
    for (let i = 0; i < palavra.length; i++) {

        //Se encontra letra a, incrementa o contador e marca que encontrou
        if (palavra.charAt(i) === 'a' || palavra.charAt(i) === 'A') {
            encontrado = true;
            qtde_As++;
        }
    }

    //Verifica se foi encontrado letras a e imprime o resultado
    if (encontrado) {
        console.log("Encontrado " + qtde_As + " quantidade de 'a' em " + palavra);
    }else{
        console.log("Não foi encontrado letras 'a' em " + palavra);
    }
}

encontrar_A('Arroz doce');
encontrar_A('mandioca');
encontrar_A('teste');

/*Output
Encontrado 1 quantidade de 'a' em Arroz doce
Encontrado 2 quantidade de 'a' em mandioca
Não foi encontrado letras 'a' em teste
 */