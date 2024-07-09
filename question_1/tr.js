// Bir JavaScript fonksiyonu oluşturunuz.Bu fonksiyon,kullanıcıdan alınan iki tam sayıyı parametre olarak almalı ve çağrıldığında bu iki tam sayının toplamını döndürmelidir.Bu fonksiyonu oluşturunuz ve sonucu console'a yazdırınız.

function sayılarıTopla(x, y) {
  return x + y;
}

const sayı1 = parseInt(prompt("İlk sayıyı girin: "));
const sayı2 = parseInt(prompt("İkinci sayıyı girin: "));

const sonuç = sayılarıTopla(sayı1, sayı2);

console.log(sonuç);
