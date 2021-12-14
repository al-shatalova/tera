
alert("Итак, давайте дружно посчитаем, сколько дней осталось то до Нового Года!");

let now = new Date;

let options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

alert("Сейчас у нас по МСК - " + now.toLocaleString("ru", options) + ". Если вы англичанин, то для вас специально: " + now.toLocaleString("en-US", options) + ".");

let NY_to_now = () => (Math.ceil(((+new Date(2022 - 1, 12, 1, 0, 0, 0, 0)) - (+new Date)) / (1000 * 3600 * 24)));

let days_to_NY = NY_to_now();

alert("Ура, до Нового 2022 Года осталось каких-то " + days_to_NY + " дней(я). Поздравляю, праздник близко...");
