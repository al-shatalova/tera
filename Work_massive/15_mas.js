let arr_15 = [];
let a = -10;
let b = 30;

let count_mas = 0;

let count_plus = 0;
let plus_sum = 0;

let aver_plus = 0;

for (i = 0; i <= 14; i++) {

    arr_15.push(Math.floor(Math.random() * (b - a)) + a);
    count_mas += 1;

    if (arr_15[i] >= 0) {
        count_plus += 1;
        plus_sum += arr_15[i];
    }
}

aver_plus = plus_sum / count_plus;

alert("Наш сгенерированный массив длины " + Number(count_mas) + " : " + arr_15 + ".");
alert("Среднее арифметическое положительных элементов равно: " + aver_plus + ".");