// 1. Використовуючи цикл "while" виведіть в консоль цифри від 0 до 10;
// * Зробіть те саме за допомогою циклу "do while" i "for"
let i = 0;
while (i < 10) { 
  console.log( i );
  ++i;
}
//"do while"
let i=0
undefined
do{
    console.log(i)
++i
}while (i<10)
//for
for (let i = 0; i <= 10; ++i) {
    console.log(i);
  }
// 2. Яке останнє значення буде виведено в консоль?
// let i = 0;
// while (i > 10) {
//   console.log(i);
//   ++i;
// }  результат undefined

// 3. Яке останнє значення буде виведено в консоль?
// let i = 0;
// do {
//   console.log(i);
//   ++i;
// } while (i < 10)
//результат 10

// 4. Замініть цей приклад використовуючи "while"
//
// for (let i = 0; i < 10; i++) {
//   console.log('i', i);
// }
let i=0
while(i<10){ console.log('i', i)
            i++}
// 5. Яке перше значення буде виведено в консоль?
// let i = 0;
// while (i > 10) {
//   ++i;
//   console.log(i);
// }
//результат undefined
//6. Яке перше значення буде виведено в консоль?
// let i = 1;
// do {
//   i++;
//   console.log(i);
// } while (i < 10)
//результат 2