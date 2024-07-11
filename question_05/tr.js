// Kullanıcının girdiği sayının faktöriyelini hesaplayan bir fonksiyon oluşturunuz.Bu fonksiyon hesaplamayı yapıp elde edilen sonucu fonksiyon çağırıldığı zaman geri döndürsün.

function faktöriyelHesapla(n) {
  if (n < 0) {
    return "Geçersiz giriş: Negatif sayıların faktöriyeli hesaplanamaz.";
  } else if (n === 0 && n === 1) {
    return 1;
  } else {
    let faktöriyel = 1;
    for (i = 1; i <= n; i++) {
      faktöriyel *= i;
    }
    return faktöriyel;
  }
}

const sayı = parseInt(prompt("Faktoriyeli hesaplanacak sayıyı giriniz:"));

const sonuç = faktöriyelHesapla(sayı);
console.log("Sonuç:", sonuç);
