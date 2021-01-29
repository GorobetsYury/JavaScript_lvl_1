'use strict';
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
Вариант №1 (через for):

let result = []
let count = 0

for (let num1 = 2; num1 < 101; num1++){
    for (let num2 = 1; num2 < (num1 + 1); num2++){
        if (num1 % num2 === 0){
            count += 1
        }
    }
    if (count === 2){
        result.push(num1)
    }
    count = 0
}
document.write(result)

Вариант №2 (через while):

let result = []
let count = 0
let num1 = 2

while (num1 < 101){
    for (let num2 = 1; num2 < (num1 + 1); num2++){
        if (num1 % num2 === 0){
            count += 1
        }
    }
    if (count === 2){
        result.push(num1)
    }
    count = 0
    num1++
}
document.write(result)

2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

Вариант №1:

const basket = [
    {name: 'Ball', cost: 1000},
    {name: 'Jersey', cost: 2000},
    {name: 'Boots', cost: 3000}
    ]

function countBasketPrice(basket) {
    let sum = 0
    for (const item of basket) {
        sum += item.cost
    }
    return alert(sum)
}
countBasketPrice(basket)

Вариант №2:
const basket = [
    ['Мяч', 3000, 3],
    ['Форма', 10000, 2],
    ['Кроссовки', 8000, 4],
    ['Сумка', 3000, 1]
]
function countBasketPrice(basket){
    let sum = 0
    for (let i = 0; i < basket.length; i++){
        sum += basket[i][1] * basket[i][2]
    }
    return alert(sum)
}
countBasketPrice(basket)

3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for (let i = 0; i < 10; document.write(`${i++} <br \/>`)) {}

4. Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
for (let i = 1, count = 20; i < count; i++){
    console.log('*'.repeat(i))
}


