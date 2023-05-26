alert("Итак, давай проверим твою фамилию на палиндром за пару щелчков!")

var s_fam = prompt("Сначала жду твою фамилию: ")

var s_fam_2 = s_fam.toLowerCase()
res_l = parseInt((s_fam_2.length) / 2)
var is_palindrom = true

for (let i = 0; i < res_l; i++) {
    if (s_fam_2[i] != s_fam_2[(s_fam_2.length) - 1 - i]) {
        is_palindrom = false
    }
}

if (is_palindrom) {
    alert("Фамилия " + s_fam + " - это реально палиндром!")
} else {
    alert("Фамилия " + s_fam + " - ну не палиндром, это точно!")
}