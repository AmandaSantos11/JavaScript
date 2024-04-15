//ex 1
console.log("\nex 1");
const names = ["Leonardo","Claudio","Fernando"];
names.forEach( (name) => console.log(name));

//ex 2
console.log("\nex 2");
const multiply = [1,2,3,4];
multiply.forEach( (n) => console.log(n*2) );

//ex 3
console.log("\nex 3");
function sum(array1) {
    let total = 0;
    array1.forEach( (a) => {
        total += a;
    });
    console.log("Total:",total);  
}

const array1 = [1,2,3];
sum(array1);

//ex 4
console.log("\nex 4");
const array2 = [1,2,3,4];
console.log( array2.map( (n) => n*n ) );

//ex 5
console.log("\nex 5");
const array3 = ["vaca","camelo","ovelha"];
console.log( array3.map( (animal) => animal.toUpperCase() ) );

//ex 6
console.log("\nex 6");
function accepted(array4,value) {
    console.log( array4.map( (e) => e*value ) );
}

const array4 = [1,2,3,4];
accepted(array4,3);

//ex 7
console.log("\nex 7");
const array5 = [1,2,3,4,5,6,7,8,9,10];
console.log( array5.filter( (f) => {
    return f % 2 === 0 ;
}) );

//ex 8
console.log("\nex 8");
const array6 = ["banana","maça","abacate","melancia"];
console.log( array6.filter( (t) => {
    return t.startsWith("m");
}) );

//ex 9
console.log("\nex 9");
function one(array7,element){
    console.log( array7.filter( (p) => {
        return p > element;
    }) );
}

const array7 = [0,15,26,30,50];
one(array7,20);

//ex 10
console.log("\nex 10");
const array8 = [1,2,3];
console.log( array8.reduce( (acumulador,valorAtual) => acumulador + valorAtual ) );

//ex 11
console.log("\nex 11");
const array9 = ["No","Pain","No","Game"];
console.log( array9.reduce( (acumulador,valor) => acumulador.concat(valor) ) );

//ex 12
console.log("\nex 12");
function average(array10) {
    const result = array10.reduce( (ac,va) => ac + va );
    console.log( result / array10.length );
}

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
average(array10);
