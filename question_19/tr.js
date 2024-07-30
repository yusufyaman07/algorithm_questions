// Verilen bir tam sayı 𝑛 (𝑛≥0)  ve bir rakam  𝑑( 0≤𝑑≤9 ) ile 0'dan 𝑛'ye kadar olan bütün sayıların karelerini içerisinde ve bu 𝑑 sayısının kaç defa olduğunu bulunuz.
karelerdekiRakamıSaymak;
function karelerdekiRakamıSaymak(n, d) {
  let count = 0;
  const digitStr = d.toString();

  for (let i = 0; i <= n; i++) {
    const squareStr = (i * i).toString();
    for (let char of squareStr) {
      if (char === digitStr) {
        count++;
      }
    }
  }

  return count;
}
