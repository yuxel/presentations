(function(){
  // el elementininin 'click' event'ına, 
  // callback fonksiyonu bagla
  var bindClick = function(el, callback){
    if(el.addEventListener){ //explorer harici
      el.addEventListener('click', callback, false);
    } 
    else if (el.attachEvent){  //explorer
      el.attachEvent("onclick", callback);
    }
  };

  // kutunun icindeki baglanti
  var link = document.getElementById("baglanti");

  // ekrana bir sey yaz 
  var ekranaBirSeyYaz = function(){
    alert("Özgür Web Teknolojileri Günleri");
  };

  // link'e tiklaninca 'ekranaBirSeyYaz' fonksiyonu cagirilsin
  bindClick(link, ekranaBirSeyYaz);
  
})();
