/*

** ELEMENT SEÇMEK  BAŞLADI. ** 

herhangi bir elementi seçmek için,
document.querySelector kullanılabilir.

querySelector(".test") --> test class için bu şekilde.
querySelector("#test") --> test id için bu şekilde


ya da sadece id seçmek için getElementById("test")

** ELEMENT SEÇMEK BİTTİ. ** 


----


** DEĞİŞKENLER BAŞLADI.  ** 

let, const (javascript)

var (artık kullanılmıyor)


let, const farkı?

let: değişebilir değişkenlerde let kullanabiliriz.
const: sabit değerler için const kullanailiriz.

örneğin

let sayi1, sayi2, toplam;
sayi1= 10;
sayi=20;

toplam = sayi1+sayi2;

sayi1= 30;

const pi = 3.18

** DEĞİŞKENLER BİTTİ.  ** 


----


** EVENTLISTENERS BAŞLADI.  ** 

element etkileşiminde kullanılır. örneğin buton üstüne gelince ayrılınca vb...

.classList.toggle("active")) --> geçiş yapmak için kullanılır. herhangi bir element tetiklendiğinde bir sonrakinde silebiliriz.

** EVENTLISTENERS BİTTİ.  ** 

*/
const toggleBtn = document.querySelector(".toggle-btn");
const mobileMenu = document.querySelector(".click");

// toggleBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("active")
// })


toggleBtn.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(toggleBtn) && 
            !e.composedPath().includes(mobileMenu)
        ){
            mobileMenu.classList.remove("active");
        }
    });
    });