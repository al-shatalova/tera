alert("Начинаем процесс создания функции высшего порядка для массива...");

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

alert("Имеется массив языков - [" + strArray + "].");

function filterForEach(arr, fn) {
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(fn(arr[i]));
    };
    return new_arr
};

const arr_0_1 = filterForEach(strArray, function (item) {
    if (item.length <= 3) {
        return 0;
    } else {
        return 1;
    };
});

alert("Финальный результат работы функции - [" + arr_0_1 + "].");