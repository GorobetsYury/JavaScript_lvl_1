// 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);       // c = 2; a = 2
d = b++; alert(d);       // d = 1; b = 1, но на след. вызове увеличится на +1
c = (2+ ++a); alert(c);  // c = (2+ ++2) = 5; a = 3
d = (2+ b++); alert(d);  // d = (2+ 2++) = 4; b = 2, но на след. вызове увеличится на +1
alert(a); // a = 3
alert(b); // b = 3
// Почему код даёт именно такие результаты?
//
//
// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); alert(x)   // x = 1 + (2 * 2) = 5
//
//
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

const a = +prompt('Первое число: ')
const b = +prompt('Второе число: ')

if ((a >= 0 && b >= 0)){
    alert(`Разность ${a - b}`)
} else if ((a < 0 && b < 0)){
    alert(`Произведение ${a * b}`)
} else if ((a >= 0 && b < 0) || (b >= 0 && a < 0)){
    alert(`Сумма ${a + b}`)
}
//
// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
//
const a = parseInt(Math.random()*16)
document.write(`a = ${a} <br \/>`)
switch (a){
    case 0:
        document.write('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 1:
        document.write('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 2:
        document.write('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 3:
        document.write('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 4:
        document.write('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 5:
        document.write('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 6:
        document.write('6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 7:
        document.write('7, 8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 8:
        document.write('8, 9, 10, 11, 12, 13, 14, 15')
        break
    case 9:
        document.write('9, 10, 11, 12, 13, 14, 15')
        break
    case 10:
        document.write('10, 11, 12, 13, 14, 15')
        break
    case 11:
        document.write('11, 12, 13, 14, 15')
        break
    case 12:
        document.write('12, 13, 14, 15')
        break
    case 13:
        document.write('13, 14, 15')
        break
    case 14:
        document.write('14, 15')
        break
    case 15:
        document.write('15')
        break
}
//
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//     Обязательно использовать оператор return.
//
function sum_(x,y){
    return x + y
}
function sep_(x,y){
    return x - y
}
function mult_(x,y){
    return x * y
}
function div_(x,y){
    return x / y
}

document.write(`${sum_(2, -3)}<br \/>`)
document.write(`${sep_(2, -3)}<br \/>`)
document.write(`${mult_(2, -3)}<br \/>`)
document.write(`${div_(2, -3)}<br \/>`)

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//     В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
//
const arg1 = +prompt('Первое число: ')
const arg2 = +prompt('Второе число: ')
const operation = prompt('Математическая операция (+, -, *, /): ' )
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return arg1 + arg2
        case '-':
            return arg1 - arg2
        case '*':
            return arg1 * arg2
        case '/':
            return arg1 / arg2
    }
}
alert(mathOperation(arg1, arg2, operation));
//
// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// null === undefined // false Эти значения различны, так как различны их типы.
// null  == undefined // true Эти значения равны друг другу и не равны никаким другим значениям.
// Это специальное правило языка.
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// С точки зрения математики это странно. Результат последнего сравнения говорит о том, что "null больше или равно нулю",
// тогда результат одного из сравнений выше должен быть true, но они оба ложны. Причина в том, что нестрогое равенство и
// сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому
// выражение (3) null >= 0 истинно, а null > 0 ложно. С другой стороны, для нестрогого равенства == значений undefined
// и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
// Поэтому (2) null == 0 ложно.
//
// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
//     Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    if (pow === 1){
        return val
    } else {
        return val * power(val, pow - 1)
    }
}
alert(power(2,4))   // 16