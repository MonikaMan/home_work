// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
a=4;
4
b=5
5
a==b
false
console.log(a==b)
 false
undefined
b=4
4
console.log(a==b)
 true
undefined
//2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
a=4;
4
b=2
2
a!=b
true
console.log(a!=b)
 true
undefined
b=4
4
console.log(a!=b)
 false
undefined
// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let s=5
undefined
let t=1
undefined
s===t
false
console.log(s===t)
 false
undefined
let t1=5
undefined
console.log(s===t1)
 true
undefined
// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let s1=5
undefined
let t11=2
undefined
console.log(s1!==t11)
 true
undefined
let t2=5
undefined
console.log(s1!==t2)
 false
undefined
// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let x=2
undefined
let y=1
undefined
console.log(x>y)
 true
undefined
console.log(y>x)
 false
undefined
// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let d=2
undefined
let f2=5
undefined
console.log(d>=f2)
false
undefined
let f=1
undefined
console.log(d>=f)
 true
undefined
// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let q=2
undefined
let w=3
undefined
console.log(q<w)
 true
undefined
let q1=4
undefined
console.log(q1<w)
false
undefined
// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a1=2
undefined
let b1=5
undefined
console.log(a1<=b1)
 true
undefined

let a2=6
undefined
console.log(a2<=b1)
 false
undefined
// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a=2
undefined
let b=5
undefined
a===2 && b===5
true
console.log(a===2 && b===5)
true
undefined
a=100
100
console.log(a===2 && b===5)
 false
undefined
// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a5 = 5
undefined
let b5=1
undefined
console.log(a5===5 || b5===1 )
true
undefined
a5=2
b5=6
console.log(a5===5 || b5===1 )
false
undefined
// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a7 = 5
undefined
console.log(!a7)
 false
undefined
console.log(!!a7)
 true
undefined
// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"
let m = ' hello '
undefined
let n = ' Moni '
undefined
console.log (m+n)
"hello  Moni" 
undefined
// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", 
//тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" 
//в іншому "медична"
let color =  'red'
undefined
let type = color === 'red' ? 'fire' : 'medical' 
undefined
console.log(type)
fire
let color = 'green'
undefined
let type = color === 'red' ? 'fire' : 'medical' 
undefined
type
'medical'
//14) Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
let n = {key1: 'a', key2: 'b'}
undefined
delete n.key1
true
console.log(n)
 {key2: 'b'}
undefined
//15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
let mas = ['f','d','c','q']
undefined
delete mas [2]
true
console.log(mas)
 (4) ['f', 'd', empty, 'q']
undefined
// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in"
// визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"
let moni = {age:28, location:'Solotvino'}
undefined
'age' in moni
true
'location' in moni
true
'lastname' in moni
false
console.log('age' in moni)
 true
undefined
console.log('lastname' in moni)
 false
undefined
// 17) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть 
//наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log
let Stepan = [6, 'Solotvino']
undefined
1 in Stepan
true
3 in Stepan
false
console.log(1 in Stepan)
 true
undefined
console.log(3 in Stepan)
 false
undefined
