/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    return function (item) {
        return item > num ? true : false;
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    return function (item) {
        return item.includes(substr);
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function (num2) {
        return num * num2;
    };
}
