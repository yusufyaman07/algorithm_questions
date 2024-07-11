// Kendisine parametre olarak verilen kelimenin alfabedeki tüm harflerden en az bir tane içerip içermediğini kontrol eden bir fonksiyon oluşturunuz. Bu fonksiyon eğer tüm harfleri içeriyorsa 1 tüm harfleri içermiyorsa 0  döndürsün.

function tumHarfleriIceriyorMu(kelime) {
  const alfabe = "abcdefghijklmnopqrstuvwxyz";

  const kucukKelime = kelime.toLowerCase();

  for (let harf of alfabe) {
    if (!kucukKelime.includes(harf)) {
      return 0;
    }
  }
  return 1;
}

const kelime = "The quick brown fox jumps over the lazy dog";

const sonuc = tumHarfleriIceriyorMu(kelime);
console.log(sonuc);
