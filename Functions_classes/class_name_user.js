class User {

    constructor(user_name) {
        this.user_name = user_name;
    }

    Hello_say() {
        alert("Ого, кого я вижу... привееет, " + this.user_name + "!");
    }
}

let first_name = prompt("Прошу ввести твоё имя...");

let user_class = new User(first_name);
user_class.Hello_say();