console.log("loops\n")

const listDestinations = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

console.log(`Destinos: ${listDestinations}\n`);

const ageCustomer = 19;
const accompanied = false;
let ticket = false;
const destiny = "São Paulo";

const authorizedPurchase = ageCustomer >= 18 || accompanied;

let counter = 0;
let destinyExists = false;

while (counter < listDestinations.length) {
    if (listDestinations[counter] == destiny) {
        console.log("Destino existe");
        destinyExists = true;
        break;
    }
    counter++;
}

console.log("Destino =", destinyExists)

if (authorizedPurchase && destinyExists) {
    console.log("\nBoa viagem!");
} else {
    console.log("\nCompra negada!");
}

for (let i = 0; i < listDestinations.length; i++) {
    if (listDestinations[i] == destiny) {
        console.log("Destino existe");
        destinyExists = true;
        break;
    }
}