// задание 1
/*
Запросите у пользователя число, возведите это число во
2-ю степень и выведите на экран.
*/
var num = prompt('Задание 1. Введите число:');
alert('Вторая степень числа ' + num + ' равна ' + (Math.pow(num, 2)));
// задание 2
/*
Запросите у пользователя 2 числа и выведите среднее ариф-
метическое этих чисел.
*/
var firstNum = prompt('Задание 2. Введите первое число:');
var secondNum = prompt('Введите второе число:');
alert('Среднее арифметическое чисел равно ') + ((firstNum + secondNum) / 2);
// задание 3
/*
Запросите у пользователя длину стороны квадрата и вы-
ведите площадь такого квадрата.
*/
var hight = prompt('Задание 3. Введите сторону квадрата:');
alert('Площадь квадрата равна ' + (Math.pow(hight, 2)));
// задание 4
/*
Реализуйте конвертор из километров в мили (пользователь
вводит километры, программа выводит мили). 1 км = 0,621371
миль. Это значение укажите в коде как константу.
*/
var km = prompt('Задание 4. Введите кол-во километров:');
var mil = 0.621371;
alert(km + ' километров равно ' + (km * mili) + ' миль');
// задание 5
/*
Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами.
*/
var a = prompt('Задание 5. Введите первое число:');
var b = prompt('Введите второе число:');
var sum = a + b;
var razn = a - b;
var del = a / b;
var umn = a * b;
alert(a + ' + ' + b + ' = ' + sum + ',  ' + a + ' - ' + b + ' = ' + razn + ',  ' + a + ' / ' + b + ' = ' + del + ',  ' + a + ' * ' + b + ' = ' + umn);
// задание 6
/*
Пользователь вводит значения a и b для формулы a * x + b = 0,
а программа считает и выводит значение x.
*/
var a2 = prompt('Задание 6. Уравнение a * x + b = 0. Введите a:');
var b2 = prompt('Введите b:');
var x = (0 - b2) / a2;
alert('x = ' + x);
// задание 7
/*
Запросите у пользователя текущее время (часы и минуты)
и выведите, сколько часов и минут осталось до следующего
дня.
*/
var hours = prompt('Задание 7. Укажите текущее время(часы):');
var minuties = prompt('Укажите текущее время(минуты):');
if (minuties == 00 || minuties == 0) {
    var ostatok = 24 - hours;
    alert('Осталось времени до следующего дня: ' + ostatok + ' часов и 00 минут');
}
else {
    var ostatokHours = 23 - hours;
    var ostatokMinuties = 60 - minuties;
    alert('Осталось времени до следующего дня:' + ostatokHours + ' часов и ' + ostatokMinuties + ' минут');
}
// задание 8
/*
Запросите у пользователя трехзначное число и выведите
вторую цифру этого числа. Для решения задачи используйте
оператор % (остаток от деления).
*/
var chislo = prompt('Задание 8. Введите трёхзначное число:');
var second = ((chislo % 100) - (chislo % 10)) / 10;
alert('Вторая цифра = ' + second);
// задание 9
/*
Запросите у пользователя пятизначное число и переме-
стите последнюю цифру в начало (из числа 12345 должно
получиться число 51234).
*/
var fiveNum = prompt('Задание 9. Введите пятизначное число:');
var lastNum = fiveNum % 10;
var newNum = ((fiveNum - lastNum) / 10) + (lastNum * 10000);
alert('Новое число(перенесли последнюю цифу впереёд): ' + newNum);
// задание 10
/*
Зарплата работника составляет $250 + 10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату.
*/
var sumProd = prompt('Введите сумму продаж за месяц(в долларах):');
var zarplata = 250 + (sumProd * 0.1);
alert('Ваша зарплата 250$ + 10% от суммы продаж = ' + zarplata + ' долларов');