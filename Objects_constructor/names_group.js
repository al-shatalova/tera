alert("Смотри, сейчас за одно действие я скажу тебе салют!");

function Group_stud(name) {
    this.name = name;
    this.is_admin = false;
}

let now_user = new Group_stud(prompt("Напиши здесь своё имя:"));

alert("Ну, что, " + String(now_user.name) + ", привет)... получается!");