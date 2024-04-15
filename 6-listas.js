console.log("listas");

const listDestinations = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Mato Grosso"
);

console.log(listDestinations);

//adicionar item
listDestinations.push("Curitiba");
console.log(listDestinations);

//deletar um item
listDestinations.splice(1,1);
console.log(listDestinations);

//remove o ultimo elemento
listDestinations.pop();
console.log(listDestinations);

//mostrar um indice
console.log(listDestinations[1]);

//remove o primeiro elemento
listDestinations.shift();
console.log(listDestinations);

//adiciona um elemento no inicio
listDestinations.unshift("Ceará");
console.log(listDestinations);
