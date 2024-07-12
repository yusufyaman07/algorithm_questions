// Verilen bir sayı dizisinin elemanlarından tek ve çift sayılardan ayrı ayrı diziler oluşturan bir JavaScript fonksiyonu yazınız.

function tekÇiftAyır(dizi) {
  let tekSayilar = [];
  let ciftSayilar = [];

  dizi.forEach((sayi) => {
    if (sayi % 2 === 0) {
      ciftSayilar.push(sayi);
    } else {
      tekSayilar.push(sayi);
    }
  });

  return { tekSayilar, ciftSayilar };
}

let sayiDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sonuc = tekÇiftAyır(sayiDizisi);
console.log("Tek Sayılar:", sonuc.tekSayilar);
console.log("Çift Sayılar:", sonuc.ciftSayilar);
