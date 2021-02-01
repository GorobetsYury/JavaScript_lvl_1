1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для
числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает
999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const inputData = 123

function myFunc (inputData){
    if (inputData < 0 || inputData > 999){
        console.log('Введите число от 0 до 999')
        console.log({})
    } else {
        const hundreds = parseInt(inputData / 100)
        const dozens = parseInt((inputData % 100) / 10)
        const units = inputData % 10

        const myObj = {
            'сотни': hundreds,
            'десятки': dozens,
            'единицы': units
        }
        console.log(myObj)
    }

}

myFunc(inputData)

2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
    goods: [{name: 'Jersey', cost: 3500, quantity: 3},
        {name: 'Shoes', cost: 7500, quantity: 4},
        {name: 'Shorts', cost: 2500, quantity: 3}],
    totalPrice() {
        let total = 0
        for(let i=0; i < this.goods.length; i++){
            total += this.goods[i]['cost'] * this.goods[i]['quantity']
        }

        return total
    }
}

console.log(basket.totalPrice())