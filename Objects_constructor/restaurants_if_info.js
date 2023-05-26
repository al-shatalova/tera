alert("Приветствую в интересном поисковике информации о ресторанах.")

is_search = true

let users = {
    availability_cards: true,
    name: "James Bond",
    number_order: 7
};

let orders = {
    customer: users.name,
    total_sum: 50000,
    content: "1 бокал польского вина, жареный стейк на 1 кг, салат Цезарь, солянка 500 мл. и индийский чай",
    date_time: new Date(2021, 11, 21, 17, 25, 30)
};

let restaurants = {
    condition: parseInt(Math.random() * (1000000 - 177777) + 177777),
    count_customers: parseInt(Math.random() * (235000 - 77777) + 77777),
    main_city: "Tokyo"
};

while (is_search == true) {

    search = prompt("О чём хотите узнать сейчас: покупатели, заказы или же рестораны?")

    if (search == "покупатели") {

        alert("Итак, перед вами " + users.name + " с заветным номером заказа " + users.number_order + ".");
        alert(users.name + " также является участником программы лояльности и содержит скидочную карту.");
        continue;

    } else if (search == "заказы") {

        alert("Перейдём к содержанию заказа, который был оформлен " + orders.date_time + ".");
        alert("Его состав: " + orders.content + ".");
        continue;

    } else if (search == "рестораны") {

        alert("Что ж... рассмотрим состояние сети ресторанов Aragawa в " + restaurants.main_city + ".");
        alert("Его состояние сейчас оценивается в " + restaurants.condition + " евро.");
        alert("Обычно в день он принимает " + restaurants.count_customers + " посетителей.");
        continue;

    } else {
        alert("Вынужден отказать в вашей просьбе и пожелаю хорошего дня. До свидания!")
        break;
    }
};