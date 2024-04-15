console.log("Exercícios de Array\n");

//ex 1
console.log("ex 1");
const listNumber = [];
listNumber.push(1,2,3);
console.log("Array de números:", listNumber);

//ex 2
console.log("\nex 2");
const fruit = ["Banana","Melancia","Morango"];
fruit.push("Melão");
console.log("Array de fruta:", fruit);

//ex 3
console.log("\nex 3");
function add(array,element) {
    array.push(element);
    console.log("Array:",array);
}

const array = [];
const element = "Cachorro";
add(array,element);

//ex 4
console.log("\nex 4");
const number = [1,2,3,4,5];
console.log("Antes:",number);
number.pop();
console.log("Depois:",number);

//ex 5
console.log("\nex 5");
const words = ["Bola","Bala","Boy","Búfalo","Babalu"];
console.log("Antes:",words);
for (let i = words.length-1; i >= 0; i--) {
    console.log(`${i}º ${words[i]}`)
    words.pop();
    
}
console.log("Depois:",words);

//ex 6
console.log("\nex 6");
function six(newArray) {
    console.log(newArray.pop());
}

const newArray = ["Pedra","Papel","Tesoura"];
six(newArray);

//ex 7
console.log("\nex 7");
const numbers = [1,2,3];
numbers.shift();
console.log("Números:",numbers);

//ex 8
console.log("\nex 8");
const citys = ["São Paulo","Bahia","Salvador","Rio de Janeiro"];
let cont = 0;
while (citys.length > 0){
    console.log(`${cont}º ${citys.shift()}`);
    cont++;
}
console.log("Cidades:",citys);

//ex 9
console.log("\nex 9");
function nine(red) {
    console.log(red.shift());
}

const red = ["Lótus","Flor"];
nine(red);

//ex 10
console.log("\nex 10");
const strings = [];
console.log("Antes:",strings);
strings.unshift("Tapioca","Queijo","Amor");
console.log("Strings:",strings);

//ex 11
console.log("\nex 11");
const colors = ["Amarelo","Azul","Vermelho"];
console.log("Antes:",colors);
colors.unshift("Verde");
console.log("Depois:",colors);

//ex 12
console.log("\nex 12");
function addition(order,object) {
    order.unshift(object);
    console.log(order);
}

const order = [1,2,3];
const object = 4;
addition(order,object);