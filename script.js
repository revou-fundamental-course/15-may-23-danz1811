// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    var sisi = document.getElementById('sisi-luas').value;
    var luas = sisi * sisi;
    document.getElementById('output_luas').innerHTML = 'Luas: ' + luas;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function hitungKeliling() {
    var sisi = document.getElementById('sisi-keliling').value;
    var keliling = 4 * sisi;
    document.getElementById('output_keliling').innerHTML = 'Keliling: ' + keliling;
  }
  
  // Event listener untuk tombol hitung luas
  document.getElementById('hitung-luas').addEventListener('click', hitungLuas);
  
  // Event listener untuk tombol hitung keliling
  document.getElementById('hitung-keliling').addEventListener('click', hitungKeliling);