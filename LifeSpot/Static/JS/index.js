let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
};


let sessionLog = function () {
    console.log('Начало сессии: ' + session.startDate)
    console.log('Даныне клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
}


function checkAge() {
    if (session.userAge >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}


//function handleSession() {
    
//    session.set("userAgent", window.navigator.userAgent);
//    session.set("startDate", new Date().toLocaleString());
          
//}


var filterContent = function () {

    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}