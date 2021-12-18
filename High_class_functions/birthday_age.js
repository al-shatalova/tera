
alert("Сейчас вычислим, кому сколько лет сейчас в 2021 году...")

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let down = 1922;
let up = 2018;

alert("Начинается процесс генерации массива в пределах от " + down + " и до " + up);

let arr_1 = [];
let count = 0;

for (let i = 0; i < rand_mas_el(10, 30); i++) {
    arr_1.push(rand_mas_el(down, up));
    count += 1;
};

alert("Процесс генерации завершён, имеем массив длины " + count + ": " + arr_1);

const arr_ages = arr_1.map(item => (2021 - item));

alert("Вывод наших получившихся возрастов в 2021 году: \n" + arr_ages);