/**
 * Bu kod sunu sunu yapiyor
 * Su event'lari dinleyip, su class'lari cagiriyor
 * Bu lisans sunları sunları gerektirir
 * params String metin : Ekrana basilacak metni bildirir
 */
var ekranaBirSeyYaz = function(metin) {
    // gelen metni ekrana basar
    alert(metin);
}
/**
 * baglantinin tiklama isleminde bir hata olusura ekrana bas
 */
$("a").click ( function() {
  //herhangi bir hata olustuysa ekrana hata bas
   if( hataVarMi() ){ 
      ekranaBirSeyYaz("Bir hata olustu");
   }
});
