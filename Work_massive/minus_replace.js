let arr_25 = [];
let a = -20;
let b = 70;

let count_mas = 0;

let square_mas = 0;

for (i = 0; i <= 24; i++) {

    arr_25.push(Math.floor(Math.random() * (b - a)) + a);
    count_mas += 1;
}

alert("Наш сгенерированный массив длины " + Number(count_mas) + " : " + arr_25 + ".");

for (i = 0; i <= 24; i++) {
    if (arr_25[i] < 0) {

        square_mas = arr_25[i] * arr_25[i];

        arr_25[i] = square_mas;
    }
}

alert("Наш уже преобразованный массив длины " + Number(count_mas) + " : " + arr_25 + ".");
