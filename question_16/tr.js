// Bir dizgede 'x' ve 'o' karakterlerinin aynı sayıda olup olmadığını büyük/küçük harf duyarlılığını göz önünde bulundurmadan kontrol eden bir fonksiyon oluşturunuz.Bu fonksiyon 'x' ve 'o' sayıları eşitse true ; değilse false döndürsün.

function XO(metin) {
  let küçükHarfMetin = metin.toLowerCase();

  let xSayacı = 0;
  let oSayacı = 0;

  for (let char of küçükHarfMetin) {
    if (char === "x") {
      xSayacı++;
    } else if (char === "o") {
      oSayacı++;
    }
  }

  console.log(xSayacı === oSayacı);
}

XO("xXXxoooO"); // true
XO("xxooo"); // false
