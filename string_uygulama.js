let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

//1- url kaç karakterli?

let sonuc;
sonuc = kursAdi.length;



//2-kursAdi kaç kelimeden oluşur?

sonuc = kursAdi.split(" ").length;

//3- url https ile mi başlıyor?*

sonuc = url.indexOf("https");

//4- kursAdi içerisinde içerisinde Eğitimi kelimesi var mı?

//sonuc = kursAdi.indexOf(Eğitimi);
console.log(sonuc);
//5- url ve kursAdi değişkenlerşnikullanarak aşağıdaki string bilgiyi oluşturunuuz.

 kursAdi = kursAdi.toLowerCase();
 kursAdi = kursAdi.replaceAll(" ","-");
 sonuc = `${url}${kursAdi}`;
console.log(sonuc);

