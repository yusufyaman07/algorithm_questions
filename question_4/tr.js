// Kullanıcıdan alınan 4 basamaklı bir sayının herbir basamağında bulunan sayıların sayı değerlerini bulan ve return eden bir fonksiyon oluşturunuz.

// Örnek: Girilen sayı 1234 ise Binler B.=1,Yüzler B.=2,Onlar B.=3, Yüzler B.=4 'tür şeklinde.

let sayı = prompt("Lütfen 4 basamaklı bir sayı girin:");

if (sayı.length === 4 && !isNaN(sayı)) {
  let binlerB = Math.floor(sayı / 1000);
  let yüzlerB = Math.floor((sayı % 1000) / 100);
  let onlarB = Math.floor((sayı % 100) / 10);
  let birlerB = sayı % 10;

  console.log(
    "Binler basamağı: " +
      binlerB +
      "\n" +
      "Yüzler basamağı: " +
      yüzlerB +
      "\n" +
      "Onlar basamağı: " +
      onlarB +
      "\n" +
      "Birler basamağı: " +
      birlerB
  );
} else {
  console.log("Lütfen geçerli bir 4 basamaklı sayı girin.");
}
