let a = 1;
const b ='abc';
var c = 'gfh';

let d = 2; // цю змінну можна міняти
const f ='moni'; // цю ні, бо це константа
/*Госпаді,
як то 
все 
тяжко*/

//4.
let bc = 'oho';
typeof bc
'string'
console.log(bc)
 oho

//5 Number
let p=1;
typeof p
'number'
console.log(p)
 1

//6 boolean
let moniisgirl = true;
typeof moniisgirl
'boolean'
console.log(moniisgirl)
 true

//7 значення типу Object яке буде містити хоча б 3 ключі.
let car = {model:'opel', color:'blue', age:20};
undefined
typeof car
'object'

console.log(car)
VM359:1 {model: 'opel', color: 'blue', age: 20}
undefined

//8 значення типу Array яке буде містити хоча б 3 значення.
let car1 =['opel','blue',20];
undefined
car1
(3) ['opel', 'blue', 20]
car1[0]
'opel'
car1[1]
'blue'
car1[2]
20
typeof car1
'object'
console.log(car1)
 (3) ['opel', 'blue', 20]
undefined

//9 function
let a=3;
undefined
let b=2;
undefined
function sum(a,b){
    sum = a+b;
    console.log(sum);
    typeof sum;}
undefined
sum(a,b)
 5
undefined

//10.11 underfined.null
let moni;
undefined
let monika=null;
undefined
monika
null
typeof moni
'undefined'
console.log(moni)
 undefined
undefined
typeof monika
'object'
console.log(monika)
 null
undefined

//12.
const user= {name:'Monika',lastname:'Man', age:28};
undefined
const location1 ={city:'Solotvino',country:'Ukraine'};
undefined
user
{name: 'Monika', lastname: 'Man', age: 28}
location1
{city: 'Solotvino', country: 'Ukraine'}
user.age
28
user.location1
undefined
user.location=location1;
{city: 'Solotvino', country: 'Ukraine'}
city: "Solotvino"country: "Ukraine"
[[Prototype]]: Object
user
{name: 'Monika', lastname: 'Man', age: 28, location: {…}}
age: 28 
lastname: "Man"
location: {city: 'Solotvino', country: 'Ukraine'}
name: "Monika"
[[Prototype]]: Object
user['location']
{city: 'Solotvino', country: 'Ukraine'}
user['lastname']
'Man'