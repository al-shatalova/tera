alert("Сейчас мы с тобой посчитаем все простые числа!")

var number = parseInt(prompt("Сначала хочу узнать твоё число: "))

for (let i = 2; i <= number; i++) {
    let is_prime = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            is_prime = false;
            break;
        }
    }
    if (is_prime) {
        alert("Окей, простым является число - " + Number(i) + " .")
    }
}
alert("Всё, посчитали)")