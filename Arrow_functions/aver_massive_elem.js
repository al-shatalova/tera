
alert("Приступим к вычислению среднего значения... но для этого сгенерируем наш массив.")

let rand_num = (min, max) => (parseInt(Math.random() * (max - min) + min));

let rand_arr = [];
for (let i = 0; i <= (rand_num(15, 30)); i++) {
    rand_arr.push(rand_num(i, rand_num(100, 548)));
};

alert("Процесс генерации завершён... вот массив длины " + rand_arr.length + " : " + rand_arr);

let aver_elem = (arr) => {
    summarity = 0;
    for (let i = 0; i < arr.length; i++) { summarity += arr[i] };
    return (summarity / arr.length)
};

alert("Среднее значение данных получившегося массива равно: " + aver_elem(rand_arr));