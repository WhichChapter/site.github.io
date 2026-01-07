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
        // Ripple effect
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

// ===== COPY LINK =====
const copyBtn = document.querySelector("#download .btn");
const scriptLink = "loadstring(game:HttpGet("https://raw.githubusercontent.com/WhichChapter/okkkkkkVape/main/NewMainScript.lua", true))()"; // <-- replace with your actual script link

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(scriptLink)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = "Copy Link";
            }, 2000);
        })
        .catch(err => console.error("Failed to copy:", err));
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
