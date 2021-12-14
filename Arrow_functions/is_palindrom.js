
alert("Приступим теперь к проверке фамилии на соответствие условиям палиндрома...");

lst_name = prompt("Введи свою фамилию ниже:");

let is_palind = (s_fam) => {
    (s_fam.toLowerCase() == s_fam.toLowerCase().split('').reverse().join('')) ?
        alert("Да, это - палиндром") :
        alert("Нет, это - не палиндром!");
};

is_palind(lst_name);