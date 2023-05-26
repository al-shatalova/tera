let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function () {
    alert("Привет, дорогой " + this.name + ". Тебе на данный момент целых " + this.age + " лет!")
}

user.sayHi();