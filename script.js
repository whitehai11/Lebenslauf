document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 800, once: true });

  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  document.getElementById("downloadPDF").addEventListener("click", () => {
    window.print();
  });
});
