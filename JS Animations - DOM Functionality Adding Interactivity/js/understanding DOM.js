// DOM - Document Object Model

// Jo bhi hum website par dekhte hai wo sab body tag ke andar bnta hai, ab jo body bnta hai whi hme website par dikhta hai, DOM actually hota hai thoda asaan shabdo mein HTML Tag aur uska poora control JS mein

// kabhi aap chaate ho ki aap ek button ko click krke ek div gaayab karde

// HTML mein koi aisa feature nahi hai jo click ko hanlde kar sake, us js ko hum perform kar skte hai DOM ke saath

// aisa js ka koi bhi code jo webpage mein kuchh bhi change karega wo js ka DOM ka code kahlayega

// DOM = HTML

// DOM Manipulation => body mein kuchh bhi change karna ya manipulate karna actucally DOM Manipulation kehlata hai

// usse ye kardo ye hone par

// selection   change     event

// accessing elements

// ek webpage banao usmein kuch element banao

// selection

// document.querySelector
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// select & save

// var btn = document.querySelector("button");

// var heading = document.querySelector("#abcd");

// var heading2 = document.querySelector(".abcd");
// var heading3 = document.getElementsByTagName("h3");

// create two img in html and two h3 and select all of them this way: give first image some id and second image a class, give first h3 a class and select the last h3 with id

// var firstImg = document.querySelector("#abcd");
// var secondImg = document.querySelector(".abcd");

// var firsth3 = document.querySelector(".defg");
// var secondh3 = document.querySelector("#defg");

// agar aapke pass bahut saarein h3 hai and aap select karte ho to sirf pehla h3 slect hoga

// var heading3 = document.querySelector("h3")

// var heading3 = document.querySelectorAll("h3");

// console.log(heading3);

// Modifying elements

// kisi ko bhi change krne se pehle usko select krna

// var btn = document.querySelector("button");

// btn.textContent = "Starting..."; // value replace

// btn.textContent += "  Starting..."; // concat with button text

// textContent   &  innerHTML

// textContent = string ki tarah aata hai text

// innerHTMl = tags dhalna chhte ho tab

var h1 = document.querySelector("h1");

// h1.innerHTML = "<i>Hello</i>";

h1.innerHTML += "  <i>Hello</i>";
