function validate() {
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let id = document.getElementById("ID-Card");
    let facultet = document.getElementById("facultet");
    let date = document.getElementById("date");
    
    
    var name_reg = /[а-яА-ЯёЁa-zA-Z]{3,}$/;
    var phone_reg = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
    var ID_reg = /[а-яА-я][а-яА-я]\s\№[0-9]{6}/;
    var facultet_reg = /[а-яА-я]{4}/;
    var date_reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-.](0?[1-9]|1[012])[\/\-.]\d{4}$/;
    

        if (!name_reg.test(name.value)) {
        name.style.border = "2px solid red";
        return false;
        }
        else {
        name.style.border = " 1px solid #CACACA";
        }
        if (!phone_reg.test(phone.value)) {
        phone.style.border = "2px solid red";
        return false;
        }
        else {
        phone.style.border = " 1px";
        }
        if (!ID_reg.test(id.value)) {
        id.style.border = "2px solid red";
        return false;
        }
        else {
        id.style.border = " 1px ";
        }
       
        if (!facultet_reg.test(facultet.value)) {
        facultet.style.border = "2px solid red";
        return false;
        }
        else {
        email.style.border = " 1px";
        }
        if (!date_reg.test(date.value)) {
            date.style.border = "2px solid red";
            return false;
            }
            else {
            date.style.border = " 1px ";
            
            alert('Вивід: ' + '\n' + 'ПІБ:' +  name.value +  '\n' + 'Телефон:' + phone.value + '\n'+ 'ID-Картка' + id.value + '\n' + 'Факультет' + facultet.value + '\n' + 'Дата народження' + date.value)
            }
}
    
    
    
    