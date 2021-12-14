
alert("Реализация калькулятора при помощи стрелочных функций уже перед тобой...")
alert("Идёт генерация случайного выражения... жди...")

let summarity = (a, b) => a + b;
let multplic = (a, b) => a * b;
let divsn = (a, b) => a / b;
let diff = (a, b) => a - b;

let rand_num = (min, max) => parseInt(summarity(multplic(Math.random(), (diff(max, min))), min));

x1 = rand_num(55, 875);
x2 = rand_num(32, 247);

alert(summarity(summarity(summarity(summarity("А вот и твои числа: ", x1), " и "), x2), "."));

alert(summarity(summarity(summarity(summarity(summarity(summarity(summarity(summarity("Сумма: ", summarity(x1, x2)), ". Разность: "), diff(x1, x2)), ". Произведение: "), multplic(x1, x2)), ". И деление: "), divsn(x1, x2)), "."));
