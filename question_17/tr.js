// Verilen bir çift sayının, iki asal sayının toplamı olup olmadığını kontrol edin. Eğer böyle iki asal sayı bulunabiliyorsa, bu sayıların neler olduğunu belirtin. Eğer bulunamıyorsa, uygun bir mesaj döndürün.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function checkGoldbach(number) {
  if (number <= 2 || number % 2 !== 0) {
    return "Lütfen 2'den büyük bir çift sayı girin.";
  }

  for (let i = 2; i <= number / 2; i++) {
    let complement = number - i;
    if (isPrime(i) && isPrime(complement)) {
      return `${number} sayısı, ${i} ve ${complement} asal sayılarının toplamı olarak yazılabilir.`;
    }
  }

  return `${number} sayısı iki asal sayının toplamı olarak yazılamaz.`;
}
