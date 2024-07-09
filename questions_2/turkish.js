// Aşağıda verilen dizinin elemanlarını toplayan bir fonksiyon oluşturun. Bu fonksiyon, dizinin elemanlarını dizi metotlarından yararlanarak toplamalıdır ve çağırıldığı zaman toplam değeri geri döndürmelidir.

const sayılar = [1, 5, 8, 12, 15, 20, 25, 30, 35, 40];

function diziToplamı(dizi) {
  let toplam = 0;
  dizi.forEach((sayı) => {
    toplam += sayı;
  });
  return toplam;
}

const toplam = diziToplamı(sayılar);
console.log(`Dizinin elemanlarının toplamı: ${toplam}`);
