// Palindrom, tersten okunduğunda da aynı olan kelime, cümle, sayı veya diğer dizilimlere verilen addır.Kullanıcıdan alınan bir verinin palindrom olup olmadığını kontrol eden bir fonksiyon oluşturunuz.

function palindromMu(veri) {
  let düzenlenmişVeri = veri.toLowerCase().replace(/[^a-z0-9]/g, "");
  let tersVeri = düzenlenmişVeri.split("").reverse().join("");
  if (düzenlenmişVeri === tersVeri) {
    return "Girilen veri palindromdur.";
  } else {
    return "Girilen veri palindrom değildir.";
  }
}

const veri = prompt("Palindrom Kontrolü Yapılacak Veriyi Giriniz:");

const sonuç = palindromMu(veri);
console.log("Sonuç:", sonuç);
