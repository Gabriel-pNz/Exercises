/*function atravessarRua (pIni, pFin, passos) {
   while (pIni < pFin) {
      pIni += passos
   }
   return pIni
}

console.log(atravessarRua(5, 40, 1))*/

function verificar(arr) {
   
   let dif = 0;
   
   for (let i = 0; i < arr.length; i++) {

      for (let j = 0; j < arr.length -1; j++) {
         
         if (arr[i] != arr[j + 1]) {
            dif++
         }else {
            dif--
         }
         if (dif == arr.length - 1) {
            return arr[i]
         }
      }
      
   }
}

console.log(verificar(['a', 'b', 'a', 'a', 'b', 'c']))

