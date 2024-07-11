// Bir üçgenin kenarlarına göre çizilebilmesi için her bir kenar uzunluğu diğer iki kenar uzunluğunun toplamından küçük, farklarından ise büyük olmalıdır.

// ! Kullanıcıdan alınan 3 sayıya göre bu kenar uzunlukları ile bir üçgen oluşturulup oluşturulamayacağını belirleyen bir fonksiyon oluşturunuz. Eğer çizilebilecekse "Bu üç kenar ile bir üçgen çizilebilir.", eğer çizilemeyecekse "Bu üç kenar ile bir üçgen çizilemez." şeklinde bir çıktı veriniz.

function üçgenMi(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return console.log("Bu üç kenar ile bir üçgen çizilebilir.");
  } else {
    return console.log("Bu üç kenar ile bir üçgen çizilemez.");
  }
}

const kenar1 = 5;
const kenar2 = 7;
const kenar3 = 10;

üçgenMi(kenar1, kenar2, kenar3);
