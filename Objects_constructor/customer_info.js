alert("Давай сейчас представим такую ситуацию... у тебя есть выбор.");

point_three = prompt("Фрукты всё-таки или овощи?").toLowerCase();

point_four = parseInt(prompt("А сейчас просто загадай число от 1 до 5 и напиши его здесь..."));

let customers = {
    name: ["Simon", "Loki", "George", "Blondie"],
    balance: [40000, 5000, 19000, 3250, 1785],
    like_product: {
        fruits: ["яблоко", "арбуз", "дыня", "вишня", "малина"],
        vegetables: ["морковь", "огурец", "помидор"]
    },
    market: ["Вкусвилл", "Пятёрочка", "Магнит", "Лента", "Метро"]
};

let number_random = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

point_one = customers.name[number_random(1, customers.name.length)];

point_two = customers.balance[number_random(1, customers.balance.length)];

if (point_three == "фрукты") {
    point_three = customers.like_product.fruits[number_random(1, customers.like_product.fruits.length)]
} else if (point_three == "овощи") {
    point_three = customers.like_product.vegetables[number_random(1, customers.like_product.vegetables.length)]
};

point_four = customers.market[point_four % 5];

alert("Ура, теперь ты - совсем другой человек в этом мире...");

document.write("Тебя зовут сейчас " + point_one + ". Твоё состояние оценивается в " + point_two + " долларов. И ты - любитель магазина " + point_four + ". Поздравляю!")
