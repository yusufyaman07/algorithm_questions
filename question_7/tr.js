/* Kombinasyonlar, matematiksel olarak n elemanlı bir kümeden r elemanlı alt kümelerin sayısı olarak ifade edilir.
İki Sayının Kombinasyonunu Bulan Formül: 
nCr = n! / (r! * (n-r)!)
*/

// Girilen iki sayının kombinasyonunu hesaplayan bir fonksiyon oluşturunuz.

function kombinasyon(n, k) {
  if (k === 0 || k === n) {
    return 1;
  }
  let pay = 1;
  let payda = 1;

  for (i = 0; i < k; i++) {
    pay *= n - i;
    payda *= i + 1;
  }
  return pay / payda;
}

const sayı1 = parseInt(prompt("Birinci Sayıyı Giriniz:"));
const sayı2 = parseInt(prompt("İkinci Sayıyı Giriniz:"));
const sonuç = kombinasyon(sayı1, sayı2);
console.log("Sonuç:", sonuç);
