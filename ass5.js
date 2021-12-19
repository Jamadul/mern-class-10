

    /*Zip code pattern
     12345
     12345-6789
     12345 1234

     */


let zip ="12345-6789";

let pattern = /^\d{5}(?:[-\s]\d{4})?$/;

console.log(pattern.test(zip));