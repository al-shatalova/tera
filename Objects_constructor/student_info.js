alert("Погрузимся в золотое студенческое время...")
name_stud = prompt("Итак, твоё имя?")
now_course = parseInt(prompt("На каком сейчас курсе учишься?"))

function Student(name = "Мистер Никто", course = 1) {
    this.name = name;
    this.course = course % 4;

    this.sayHi = function () {
        alert("Всем общий салют, а меня зовут: " + this.name + ".");
    };

    this.state = function () {
        alert(this.name + " сейчас учится на " + this.course + " курсе, юхууу!");
    };
};

let stud = new Student(name_stud, now_course);

stud.sayHi();
stud.state();
