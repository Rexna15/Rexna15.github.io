// script.js
document.addEventListener("DOMContentLoaded", function() {
    const halloElement = document.querySelector(".hallo");
  
    halloElement.addEventListener("mouseover", function() {
      halloElement.style.color = "#00FF00"; // Mengubah warna teks saat kursor berada di atasnya
    });
  
    halloElement.addEventListener("mouseout", function() {
      halloElement.style.color = "#FF0000"; // Mengembalikan warna teks ke warna semula saat kursor meninggalkan elemen
    });
  });
