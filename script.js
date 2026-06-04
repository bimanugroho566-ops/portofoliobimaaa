// Typing Effect
const text = "Mahasiswa Teknik Informatika | Web Developer";
let index = 0;

function typingEffect() {
  const typingText = document.getElementById("typing");

  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 80);
  }
}

window.onload = typingEffect;

// Form Submit Alert
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Pesan berhasil dikirim!");

  form.reset();
});

// Scroll Animation
const sections = document.querySelectorAll("section, article");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// Tombol Scroll ke Atas
const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";
scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
