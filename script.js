function isPalindrome(string2) {
    let nomeEmMinusculo = string2.toLowerCase();
    let result = "";
    let result2 = "";
    let initialIndice = nomeEmMinusculo.length - 1;
  
    for (let id = 0; id < nomeEmMinusculo.length; id++) {
      result += nomeEmMinusculo[id]; 
       
      console.log (result)
  
      for (let id = initialIndice; id >= 0; id--) 
        result2 = nomeEmMinusculo[id] + result2
  
      console.log (result2)
  
        if (result == result2) {
          return true;
        }
      }
      return false;
    }
  
  isPalindrome("Radar");
  

function arrayMaxMin(arr) {
  /* Seu código aqui */
}

//let back = "";
//let initialIndice = string2.length - 1;

//for (let indice = initialIndice; indice >= 0; indice--) {
//back = string2[indice] + back;

//f ((back = initialIndice)) {
//  return true;
//  }
//}
//return false;
