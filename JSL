// Smooth scroll to contact section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// WhatsApp button hover effect
const whatsappBtn = document.querySelector('.btn-outline');
if (whatsappBtn) {
  whatsappBtn.addEventListener("mouseenter", () => {
    whatsappBtn.style.transform = "scale(1.08)";
  });
  whatsappBtn.addEventListener("mouseleave", () => {
    whatsappBtn.style.transform = "scale(1)";
  });
}
