function isPalindrome(string) {
  let minusculo = string.toLowerCase().replace();
  let texto = string.length;

  for (i = 0; i < texto; i++) {
    if (minusculo[i] !== minusculo[texto - 1 - i]) {
      return false;
    }
    return true;
  }
}
isPalindrome("Radar");

function arrayMaxMin(array) {
 

  let max = 0;
  let min = 0;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (current > array[max]) {
      max = i;
    }
    if (current > array[min]) {
      min = i;
    }
    return { max, min };
  }
  
}

console.log (arrayMaxMin[3,5,6,2,1,4])

//Requisitos
//Para desenvolver essa tarefa você deve cumprir alguns requisitos:

//O nome da função deve ser arrayMaxMin;
//A função deverá receber o array por parâmetro;
//Sua função deve obrigatoriamente utilizar laço de repetição para percorrer e analisar o array recebido por parâmetro;
//Sua função deve retornar um novo array onde no índice 0 será apresentado o valor mínimo e no índice 1 o valor máximo.

//Dicas
//Utilize variáveis auxiliares para armazenar, ao longo do looping, o maior e menor número encontrados até o momento;
//Inicie suas variáveis auxiliares com o número 0, visto que os números dispostos dentro do array serão sempre
//iguais ou maiores que 1. Ex. arr[n] >= 1;
//Monte seu laço de repetição percorrendo todos os valores do array;
//Monte o array de retorno com os valores armazenados nas variáveis auxiliares, mas deixe esse passo para ser
//executado após o laço de repetição.
