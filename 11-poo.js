//o _ é uma convenção para representar atributos privados

import { Client } from "./Client.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client1 = new Client("José",53223498700);
const client2 = new Client("Ana",2223568799);

const account1 = new CurrentAccount(client1,1099);
const account2 = new CurrentAccount(client2,1000);

//console.log(account1,account2);
//console.log(account2.client);

//console.log("\nTRANSFERENCIA\n");
//account1.transfer(50,account2);
//console.log(account1);
//console.log(account2);

//DEPOSITO
//const valueWithdraw = account1.withdrawMoney(50);
//console.log("Saque de:", valueWithdraw);

//NUMERO DE CONTAS
//console.log(CurrentAccount.numberOfAccounts);
