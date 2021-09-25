// todo Ara butonuna tiklandiginda duran calan telefon  ciksin, zil calsin

let resim = document.querySelector(".resim"); // resim'e ulastim
let ringtone = document.querySelector(".ses"); //audioya ulastim
document.querySelector(".on").onclick = function () {
  //Ara butonuna ulastim
  resim.src = "./img/img.gif"; //resim degistirdim
  ringtone.play(); //sesi calistirdim
};

// todo Bağlat butonuna basinca gif gelsin, ses kesilsin

document.querySelector(".off").onclick = function () {
  //Bağlat butonunu cagirdik
  resim.src = "./img/telbağla.gif";
  ringtone.pause(); //sesi susturduk
};

// todo Konuş butonuna basinca yeni gif gelsin

document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};

//todo Ekle butonuna basildiginda yeni bir <li> ekle

const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".dil");
  liste.innerHTML = liste.innerHTML + `<li>${satir.value}</li>`;
  //todo listenin innerhtml'ine, ne yaziyorsam li olarak ekle. Backtick ile ne yazarsak ekler
  satir.value = ""; //todo bu sekilde de ekleme yaptiktan sonra satirin icini temizliyor
};

//todo Sil butonuna basildiginda <li> elemani silinsin
//! listeyi 27. satirda fonksiyon disinda yazdigimiz icin burdan tekrar cagirmamiza gerek yok

document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastChild); //todo Listeye son gireni sil
};
