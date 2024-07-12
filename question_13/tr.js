// Gümrükten geçen her ürün için %18 KDV (Katma Değer Vergisi), %20 ÖTV (Özel Tüketim Vergisi), %10 Gümrük Vergisi, %5 Çevre Vergisi ve %2 Damga Vergisi alınmaktadır. Bu oranlar kullanılarak, gümrük fiyatı üzerinden her bir vergi türü için vergi ücretlerinin hesaplanması ve bu vergiler dahil edilerek toplam satış fiyatının bulunması gerekmektedir. Bu işlemi gerçekleştiren ve fonksiyonun çağırıldığı yerde bu fiyatı döndüren bir fonksiyon oluşturunuz.

function toplamFiyatHesapla(gumrukFiyati) {
  const KDV_ORANI = 0.18;
  const OTV_ORANI = 0.2;
  const GUMRUK_VERGISI_ORANI = 0.1;
  const CEVRE_VERGISI_ORANI = 0.05;
  const DAMGA_VERGISI_ORANI = 0.02;

  let kdvTutari = gumrukFiyati * KDV_ORANI;
  let otvTutari = gumrukFiyati * OTV_ORANI;
  let gumrukVergisiTutari = gumrukFiyati * GUMRUK_VERGISI_ORANI;
  let cevreVergisiTutari = gumrukFiyati * CEVRE_VERGISI_ORANI;
  let damgaVergisiTutari = gumrukFiyati * DAMGA_VERGISI_ORANI;

  let toplamFiyat =
    gumrukFiyati +
    kdvTutari +
    otvTutari +
    gumrukVergisiTutari +
    cevreVergisiTutari +
    damgaVergisiTutari;

  return toplamFiyat;
}

const gümrükFiyatı = parseInt(prompt("Malın Gümrük Fiyatını Giriniz"));
const satışFiyatı = toplamFiyatHesapla(gümrükFiyatı);
console.log("Toplam Fiyat:", satışFiyatı.toFixed(2));
