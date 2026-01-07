// ===== MOBILE MENU =====
const menu = document.getElementById("mobile-menu");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll("section, .feature");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== BUTTON RIPPLE =====
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const ripple = document.createElement("span");
        ripple.style.position = "absolute";
        ripple.style.width = ripple.style.height = "120px";
        ripple.style.background = "rgba(255,255,255,0.4)";
        ripple.style.borderRadius = "50%";
        ripple.style.left = `${e.offsetX - 60}px`;
        ripple.style.top = `${e.offsetY - 60}px`;
        ripple.style.animation = "ripple 0.6s linear";
        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== RIPPLE KEYFRAMES =====
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

