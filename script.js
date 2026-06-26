// ===============================
// WEBSITE PROFIL RIBY
// ===============================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute('href'));

        tujuan.scrollIntoView({
            behavior: 'smooth'
        });

    });
});

// Animasi muncul saat halaman dibuka
window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});

// Efek Header saat Scroll
window.addEventListener('scroll', () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background = "linear-gradient(135deg,#ff6fb5,#9fdcff)";
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    }else{

        header.style.background = "linear-gradient(135deg,#ff8fc7,#bde8ff)";
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.10)";

    }

});

// Efek Hover Card
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Efek Foto Profil
const foto = document.querySelector(".hero-image img");

foto.addEventListener("mouseover", () => {

    foto.style.transform = "scale(1.05) rotate(-2deg)";

});

foto.addEventListener("mouseout", () => {

    foto.style.transform = "scale(1)";

});

// Animasi Muncul Saat Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    observer.observe(sec);

});