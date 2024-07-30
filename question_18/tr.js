// Yarışan iki kaplumbağanın hızlarını ve kaplumbağa A'nın kaplumbağa B'ye olan avantajını göz önünde bulundurarak, kaplumbağa B'nin kaplumbağa A'yı yakalayıp yakalamayacağını ve eğer yakalarsa, ne kadar sürede yakalayacağını hesaplayan bir fonksiyon oluşturun.

function yarış(v1, v2, g) {
  if (v1 >= v2) {
    return [-1, -1, -1];
  }

  const saatCinsindenSüre = g / (v2 - v1);

  const saat = Math.floor(saatCinsindenSüre);
  const dakika = Math.floor((saatCinsindenSüre - saat) * 60);
  const saniye = Math.floor(((saatCinsindenSüre - saat) * 60 - dakika) * 60);

  return [saat, dakika, saniye];
}
