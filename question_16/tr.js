// Bir çokgen çizebilmek için en az 3 kenara ihtiyacımız vardır.n kenarlı bir çokgenin iç açıları toplamı ise (n-2)*180 formülü ile bulunur.

// ! Kenar sayısı verilen bir çokgenin iç açıları toplamını veren bir fonksiyon oluşturunuz. Bu fonksiyon eğer kenar sayısı 3'den küçükse 'Kenar sayısı 3 ya da 3'den büyük olmalıdır.' şeklinde uyarı vermeli ve eğer kenar sayısı 3'den büyükse bu çokgenin iç açıları toplamını hesaplamalıdır.

function içAçılarToplamı(n) {
  if (n >= 3) {
    const içAçılarToplamı = (n - 2) * 180;
    console.log(`İç Açılar Toplamı: ${içAçılarToplamı}`);
  } else {
    alert("Kenar sayısı 3 ya da 3'den büyük olmalıdır.");
  }
}

const kenarSayısı = parseInt(
  prompt("İç açıları toplamı hesaplanacak çokgenin kenar sayısını giriniz:")
);

if (!isNaN(kenarSayısı)) {
  içAçılarToplamı(kenarSayısı);
} else {
  alert("Geçerli bir sayı giriniz.");
}
