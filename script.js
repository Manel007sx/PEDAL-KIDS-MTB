/* ================= CARROSSEL ================= */
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[i].classList.add("ativo");
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

/* ================= ZOOM CERTIFICADOS ================= */
const imagens = document.querySelectorAll(".zoom-certificado");
const modal = document.getElementById("modalZoom");
const modalImg = document.getElementById("imgZoom");
const fechar = modal.querySelector(".fechar");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

/* Fecha clicando fora da imagem */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* ================= MODAL ARTIGO ================= */
const abrirArtigo = document.getElementById("abrirArtigo");
const modalArtigo = document.getElementById("modalArtigo");
const fecharArtigo = document.getElementById("fecharArtigo");

if (abrirArtigo) {
    abrirArtigo.addEventListener("click", () => {
        modalArtigo.style.display = "flex";
    });
}

if (fecharArtigo) {
    fecharArtigo.addEventListener("click", () => {
        modalArtigo.style.display = "none";
    });
}

modalArtigo.addEventListener("click", (e) => {
    if (e.target === modalArtigo) {
        modalArtigo.style.display = "none";
    }
});
