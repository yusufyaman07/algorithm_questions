// Başlangıçta 1000 kişilik bir nüfusa sahip olan bir kasabada, her yıl %2 oranında düzenli bir artış olmaktadır. Bunun dışında, her yıl 50 kişilik düzenli bir göç almaktadır. Bu kasabanın nüfusunun kaç yıl sonra 1 milyon kişiye ulaşacağını hesaplayan bir fonksiyonu oluşturunuz.

function yillarIcerisindeNufusArtisi(
  baslangicNufusu,
  hedefNufus,
  yillikArtisOrani,
  yillikGoc
) {
  let mevcutNufus = baslangicNufusu; // Burada isimlendirme doğru olmalı
  let yil = 0;

  while (mevcutNufus < hedefNufus) {
    mevcutNufus += mevcutNufus * yillikArtisOrani + yillikGoc;
    yil++;
  }

  return yil;
}

// Parametreler
const baslangicNufusu = 1000;
const hedefNufus = 1000000;
const yillikArtisOrani = 0.02; // %2
const yillikGoc = 50;

// Fonksiyonu çağır ve sonucu yazdır
const sonuc = yillarIcerisindeNufusArtisi(
  baslangicNufusu,
  hedefNufus,
  yillikArtisOrani,
  yillikGoc
);
console.log(`Kasabanın nüfusu ${sonuc} yıl sonra 1 milyon kişiye ulaşacaktır.`);
