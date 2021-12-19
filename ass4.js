


let password = "azAZ09";

let pattern = /^(.{5,8}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

console.log(pattern.test(password));