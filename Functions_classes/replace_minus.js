let mas_arr = [];

let down_range = -20;
let up_range = 70;

function generate_massive(arr_25, a, b) {

    let count_mas = 0;

    for (i = 0; i <= 24; i++) {

        arr_25.push(Math.floor(Math.random() * (b - a)) + a);
        count_mas += 1;
    }

    alert("Наш сгенерированный массив длины " + Number(count_mas) + " : " + arr_25 + ".");

    return arr_25;
}

function replace_minus(arr_25) {

    let square_mas = 0;
    let count_mas = 0;

    for (i = 0; i <= 24; i++) {

        count_mas += 1;

        if (arr_25[i] < 0) {

            square_mas = arr_25[i] * arr_25[i];

            arr_25[i] = square_mas;
        }
    }

    alert("Наш уже преобразованный массив длины " + Number(count_mas) + " : " + arr_25 + ".");
}

gener_mas = generate_massive(mas_arr, down_range, up_range);

replace_minus(gener_mas);