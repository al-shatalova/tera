alert("Начинаем проверку пользователей на совершеннолетие...");

function rand_mas_el(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const persons = [
    { name: 'Peter', age: rand_mas_el(10, 35) },
    { name: 'Mark', age: rand_mas_el(12, 28) },
    { name: 'John', age: rand_mas_el(14, 31) },
    { name: 'Jane', age: rand_mas_el(16, 42) },
    { name: 'Tony', age: rand_mas_el(18, 54) },
];

let names = [];
let ages = [];

names = persons.map(item => item.name);
ages = persons.map(item => item.age);

alert("На начальный момент мы имеем массив объектов с именами (" + String(names) + ") и случайным возрастом (" + String(ages) + ").");

fullAgeNameAdmin = persons.filter(persons => persons.age >= 18);

adm_names = fullAgeNameAdmin.map(fullAgeNameAdmin => fullAgeNameAdmin.name);
adm_ages = fullAgeNameAdmin.map(fullAgeNameAdmin => fullAgeNameAdmin.age);

alert("Потенциальные админы нашего сайта: (" + adm_names + "), а вот их возраст - (" + adm_ages + ").");