// Permutasyon, bir kümedeki elemanların belirli bir sırayla yerleştirilmesi veya düzenlenmesi işlemidir. Bir kümedeki elemanların farklı sıralama veya dizilimlerini ifade eder.

// ! İki sayının permütasyonunu hesaplayan bir fonksiyon oluşturunuz.

function permütasyon(n, k) {
  let permütasyon = 1;

  for (let i = 0; i < k; i++) {
    permütasyon *= n - i;
  }

  return permütasyon;
}

const sonuç = permütasyon(6, 3);
console.log("Sonuç:", sonuç);
