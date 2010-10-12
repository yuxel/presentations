//Tum ogeler icinde, "alt" attribute'u "foo" olan ogeyi bulur
var elementFoo = undefined;

//elemanı bul
function getElementWhichHasAltAttributeFoo(){
    //eger daha once bulunmussa gezme
    if( !elementFoo ) {
        var allElements = document.getElementsByTagName('*');
        console.log('Tum elemenalarda geziniliyor');
        for(var elementKey in allElements){
            console.log('gezilen eleman = ' + elementKey);
            var currentElementsAltAttribute = allElements[elementKey].alt;
           
            //Elemanı bulursan elementFoo'ya ata 
            if ( currentElementsAltAttribute == "foo" ) {
                elementFoo = allElements[elementKey];
                break;
            }
        }
    }
    return elementFoo;
};

console.log(getElementWhichHasAltAttributeFoo()); //ilk gezintide tum elemanlari gezer
console.log(getElementWhichHasAltAttributeFoo()); //direkt cache'den alır
