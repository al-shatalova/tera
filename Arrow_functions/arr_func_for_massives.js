
alert("Для начала сгенерируем произвольный массив чисел произвольной длины...");

let rand_num = (min, max) => (parseInt(Math.random() * (max - min) + min));

let rand_arr = [];
for (let i = 0; i <= (rand_num(15, 30)); i++) {
    rand_arr.push(rand_num(i, rand_num(100, 548)));
};

alert("Процесс генерации завершён... вот массив длины " + rand_arr.length + " : " + rand_arr);

let rand_summs = rand_arr.reduce((acc, current_score) => (acc + current_score), 0);

alert("1 результат (сумма) -> " + rand_summs);

let rand_even = rand_arr.filter(rand_arr => rand_arr % 2 == 0);

alert("2 результат (подмассив с чётными элементами) -> " + rand_even);

let rand_x2 = rand_arr.map(item => item * 2);

alert("Последний результат (массив с х2 элементами) -> \n" + rand_x2 + ".\nУра, опыт удался!");
