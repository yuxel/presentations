//Kullanıcı bilgilerini getirir
var userData = undefined;

//kullanıcı verilerini dondurur
function getUserData(){

    //eger daha once istenmişse onbellekten ver
    if(!userData){
        userData = AJAX.getJSON("http://orneksite.com/kullanici.php");
    }

    return userData;
};

console.log(getUserData()); //ilk gezintide istegi yapar
console.log(getUserData()); //ikinci istegi yapmaz, onbellekten gelir
