class Flip {

    constructor(name_user) {
        this.name_user = name_user;
    }

    reverse_user_first_name() {
        return this.name_user.split("").reverse().join("");
    }
}

let class_user_name = new Flip(String(prompt("Прошу ввести ваше имя...")));

alert("Вот получилось твоё перевёрнутое имя тут: " + class_user_name.reverse_user_first_name());