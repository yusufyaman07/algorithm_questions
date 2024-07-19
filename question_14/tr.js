// Bir üniversite öğrencisinin dönem notu vize sınavının %40 ve final sınavının %60 ı alınarak bulunur.

// ! Bir kullanıcıdan alınan vize ve final notlarına göre ortalama hesaplayan bir fonksiyon oluşturunuz.Bu fonksiyon çağırıldığı yerde dönem notunu döndürsün.

function dönemNotuHesapla(x, y) {
  const ortalama = x * 0.4 + y * 0.6;
  return ortalama;
}

const vizeNotu = parseInt(prompt("Vize notunu giriniz :"));
const finalNotu = parseInt(prompt("Final notunu giriniz :"));

const dönemNotu = dönemNotuHesapla(vizeNotu, finalNotu);

console.log(`Öğrencinin Dönem Notu: ${dönemNotu}`);
