// Bir kelimenin  harflerinin alfabetik sıralarına göre puanlarını hesaplayın ve toplamını bulun. ör: love(12+15+22+5) = 54 puan

function harfDeğeri(kelime) {
  let toplamDeğer = 0;

  for (let char of kelime) {
    toplamDeğer += char.charCodeAt(0) - 96;
  }

  return toplamDeğer;
}
