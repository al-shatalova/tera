function is_palindrom(s_fam = "Джаваскрипт") {

    var s_fam_2 = s_fam.toLowerCase();
    res_l = parseInt((s_fam_2.length) / 2);
    var is_palindrom = true;

    for (let i = 0; i < res_l; i++) {
        if (s_fam_2[i] != s_fam_2[(s_fam_2.length) - 1 - i]) {
            is_palindrom = false;
        }
    }

    if (is_palindrom) {
        alert("Строка " + s_fam + " - это реально палиндром!");
    } else {
        alert("Строка " + s_fam + " - ну не палиндром, это точно!");
    }

}

alert("Итак, давай проверим любую строку на палиндром за пару щелчков!");

let last_name_user = prompt("Сначала жду твою строчку: ");

is_palindrom(last_name_user);