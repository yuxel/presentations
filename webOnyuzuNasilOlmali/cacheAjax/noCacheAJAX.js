//Kullanıcı bilgilerini getirir
var userData = undefined;

//kullanıcı verilerini dondurur
function getUserData(){
    userData = AJAX.getJSON("http://orneksite.com/kullanici.php");

    return userData;
};

console.log(getUserData()); //ilk gezintide istegi yapar
console.log(getUserData()); //sonraki gezintilerde de istegi yapar
