// Yusuf ve Mehmet'in oluşturduğu diziler aşağıda verilmiştir. Her iki dizinin aynı sıradaki elemanlarını karşılaştırarak büyük olan kişiye 1 puan verilecek, eşitlik durumunda ise kimseye puan verilmeyecektir. Kullanıcı skorlarını döndüren bir fonksiyon oluşturunuz.

const Yusuf = [4, 7, 13];
const Mehmet = [1, 8, 12];

function sayılarıKarşılaştır(a, b) {
  let skorYusuf = 0;
  let skorMehmet = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      skorYusuf += 1;
    } else if (a[i] < b[i]) {
      skorMehmet += 1;
    }
  }

  return [skorYusuf, skorMehmet];
}

const sonuç = sayılarıKarşılaştır(Yusuf, Mehmet);

console.log(`Yusuf'un skoru: ${sonuç[0]}\n Mehmet'in skoru: ${sonuç[1]}`);
