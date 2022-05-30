//1.number v string
let age=25
let strage =String(age)
console.log(strage)
 25
undefined
typeof strage
'string'
//2.number v boolean
let num = 3
undefined
let bolnum = Boolean(num)
undefined
console.log(bolnum)
 true
undefined
typeof bolnum
'boolean'
//3.number v Null(),для Null() не має конструктора

let f =0
undefined
f = null 
null
console.log(f)
null
undefined
typeof f
'object'
//4.string v number
let Srt = '28'
undefined
typeof Srt
'string'
let numStr =Number(Srt)
undefined
console.log(numStr)
28
undefined
typeof numStr
'number'
//5.string v boolean
let k ='moni'
undefined
let bolk=Boolean(k)
undefined
console.log(bolk)
 true
undefined
typeof bolk
'boolean'
//6. string v Null()
let g = 'asd'
undefined
g = null
null
console.log(g)
 null
undefined
typeof g
'object'
//7 boolean v string
let Boolean = true
undefined
let strBoolean = String(Boolean)
undefined
console.log(strBoolean)
true
undefined
typeof strBoolean
'string'
//8 boolean v number
let bol = true
undefined
console.log(bol)
 true
undefined
typeof(bol)
'boolean'
let numbol = Number(bol)
undefined
console.log(numbol)
 1
undefined
typeof numbol
'number'
//9 boolean v Null()
let bom = true
undefined
bom = null
undefined
console.log(bo)
null
undefined
typeof bo
'object'
//10 null v string
let q = null
let strq = String(q)
undefined
console.log(strq)
 null
undefined
typeof strq
'string'
//11 null v number
let w  = null
undefined
let numw= Number(w)
undefined
console.log(numw)
 0
undefined
typeof numw
'number'
//12 null v boolean
let p =null
undefined
let bp= Boolean(p)
undefined
console.log(bp)
 false
undefined
typeof bp
'boolean'
//13 способи створення функції
function functionName (arg1,arg2) {return arg1+arg2}
functionName(arg1,arg2)

let moni= function(arg1,arg2)  {return arg1+arg2}
moni(arg1,arg2) 

function getName (){return 'Moni'}
getName()


//14 Напишіть функцію яка нічого не повертає
function ava (){}
undefined
ava ()
undefined

//15Напишіть функцію яка завжди буде повертати ваше імя
function getName (){return 'Moni'}
undefined
getName()
'Moni'

//16  Створіть функцію яка приймає 1 аргумент і повертає його без змін.
let n =6
function bbb ( ) {return n }
undefined
bbb()
6

a=7
7
function g() {return a}
undefined
g()
7
//17 Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
let r =3
undefined
let t=4
undefined
function sum (r,t) {return r+t}
sum(r,t)
7
let i =3
undefined
let x=4
undefined
function sum (i,x) {return i+x}
sum(i,x)
7
sum(2,3)
5
//18 3 аргумента
let m=1
undefined
let v=2
undefined
let y=3
undefined
function sum1(m,v,y){return m+v+y}
undefined
sum (m,v,y)
6
sum(2,5,8)
15