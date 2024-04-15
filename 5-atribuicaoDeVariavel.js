console.log("atribuição de variáveis");

const nameIs = "Rodolfo";
const lastName = "Marques";

console.log(nameIs +" "+ lastName);

//a virgula serve para dar espaço tbm
console.log(nameIs,lastName);

//a crase `` serve para tornar a escrito em string e concatenar com variaveis
//utilizando ${}
console.log(`Meu nome é ${nameIs} ${lastName}`);

//sobreescrevendo a variavel firstName
let firstName = "Paulo";

console.log(firstName);

firstName = firstName + lastName;

console.log(firstName);

