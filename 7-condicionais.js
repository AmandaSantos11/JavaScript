console.log("condicionais")

const listDestinations = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Mato Grosso"
);

console.log(`Destinos: ${listDestinations}\n`);

const ageCustomer = 18;
const accompanied = false;

if (ageCustomer >= 18 || accompanied) {
    console.log("Comprador maior de idade ou menor de idade acompanhado");
    listDestinations.splice(0, 1);
    console.log(listDestinations);
} else {
    console.log("Somente maiores de idade ou menores acompanhados podem comprar!")
}

const ticket = true;

console.log("\nEmbarque:");

if (ageCustomer >= 18 && ticket) {
    console.log("Boa viagem!");
} else {
    console.log("Embarque negado");
}
