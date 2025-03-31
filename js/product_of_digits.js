const productOfDigits = (num) => {
   let product= 1;
   let stringNumber = String(num);//convert number to string for find the length of the number
   for(let i=0;i<stringNumber.length;i++){
        product = product*Number(stringNumber[i]);//again convert the string to a number for the calculation
   }
   return product;
};

let num = 234;
console.log(`Product of digits in ${num}:`, productOfDigits(num));