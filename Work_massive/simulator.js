let arr = [];

let count_red = 0;

for (i = 0; i <= 1000000; i++) {
    arr[i] = Math.round(Math.random() * 2);

    if (arr[i] == 0) {
        count_red += 1;
    }
}

alert("Прошло небольшое количество времени, пока генерировался наш массив...")

alert("Количество красных получившихся элементов равно: " + count_red + ".")

let user_w = prompt("Хочешь увидеть итоговый результат?")

if (user_w.toLowerCase() == "да") {
    alert("Ваш массив: " + arr + ".")
} else if (user_w.toLowerCase() == "yes") {
    alert("Ваш массив: " + arr + ".")
}