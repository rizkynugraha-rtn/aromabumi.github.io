// Membuka  dan Menutup Modal //
const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalButton");
const closeIcon = document.getElementById("closeModalIcon");
const closeBtn = document.getElementById("closeModalButton");

// Ketika tombol openButton ditekan
openButton.addEventListener("click", () => {
  modal.style.display = "block";

  // Ketika tombol closeButton ditekan
  closeIcon.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Ketika tombol closeButton ditekan
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
