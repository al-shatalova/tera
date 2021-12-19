
alert("Запуск процесса создания массива с e-mail адресами почт...");

let is_search = true;
let e_mail_s = ['val_0_id@email.com', 'val_1_id@email.com', 'val_2_id@email.com', 'val_3_id@email.com', 'val_4_id@email.com', 'val_5_id@email.com'];

let cont_search = true;

while (is_search == true) {

    let num_email = String(parseInt(prompt("Номер какой почты вы хотели бы видеть сейчас?")));

    let filt_email = (array, num) => {
        for (let i = 0; i < array.length; i++) {
            let curr_str = array[i];
            if (curr_str[4] == num) {
                return curr_str;
            };
        };
    };

    let final_res = filt_email(e_mail_s, num_email);

    console.log("Ваш e-mail: " + final_res);
    document.write(`<br/><br/>${"Ваш найденный e-mail адрес в сети Интернет -> "} ${final_res}`);
    cont_search = prompt("Продолжаем поиски?").toLowerCase();

    if (cont_search == "да") {
        continue;

    } else if (cont_search == "yes") {
        continue;

    } else {

        alert("Твои поиски успешно закончены. Поздравляю!");
        break;

    };
};