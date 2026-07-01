/* ==================================================
   INTERNATIONAL POLICE PROFILE SYSTEM
================================================== */

/* ==================================================
   LOADER
================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const logo = document.querySelector(".loader-logo");

    if (!loader) return;

    // Logo entrance animation
    if (logo) {

        logo.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(.5)"
                },
                {
                    opacity: 1,
                    transform: "scale(1)"
                }
            ],
            {
                duration: 1000,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }

    // Wait for loading bar animation
    setTimeout(() => {

        loader.style.transition =
            "opacity 1s ease, visibility 1s ease";

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 3500);

});

/* ==================================================
   SMOOTH SCROLLING
================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

/* ==================================================
   NAVBAR SCROLL EFFECT
================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(2,8,19,.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background =
            "rgba(4,10,18,.7)";

        navbar.style.boxShadow =
            "none";

    }

});

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === #${current}
        ) {

            link.classList.add("active");

        }

    });

});

/* ==================================================
   REVEAL ON SCROLL
================================================== */

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    }, {
        threshold: 0.15
    });

document
.querySelectorAll(
    ".glass-panel, .stat-card, .timeline-item, .assignment-card, .verification-box"
)
.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
        "translateY(40px)";
    item.style.transition =
        "all .8s ease";

    revealObserver.observe(item);

});

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const style =
            document.createElement("style");

        style.innerHTML = `
        .visible{
            opacity:1 !important;
            transform:translateY(0)!important;
        }

        .active{
            color:#73a6ff !important;
        }
        `;

        document.head.appendChild(style);

    }
);

/* ==================================================
   FLOATING PROFILE IMAGE EFFECT
================================================== */

const profileImage =
    document.querySelector(".profile-image");

if (profileImage) {

    let direction = 1;

    setInterval(() => {

        profileImage.style.transform =
            translateY(${direction * 8}px);

        profileImage.style.transition =
            "3s ease";

        direction *= -1;

    }, 3000);

}

/* ==================================================
   VERIFY BUTTON
================================================== */

const verifyButton =
    document.querySelector(".verify-btn");

if (verifyButton) {

    verifyButton.addEventListener(
        "click",
        e => {

            e.preventDefault();

            verifyButton.innerHTML =
                "VERIFYING...";

            verifyButton.style.opacity =
                ".8";

            setTimeout(() => {

                verifyButton.innerHTML =
                    "PROFILE VERIFIED";

                verifyButton.style.opacity =
                    "1";

            }, 2000);

        }
    );

}

/* ==================================================
   PARALLAX GLOW
================================================== */

const glow =
    document.querySelector(
        ".background-glow"
    );

window.addEventListener("scroll", () => {

    if (!glow) return;

    const scroll =
        window.pageYOffset;

    glow.style.transform =
        translateY(${scroll * 0.15}px);

});

/* ==================================================
   FOOTER YEAR
================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}

/* ==================================================
   CONSOLE MESSAGE
================================================== */

console.log(`
=========================================
INTERNATIONAL POLICE PROFILE PORTAL
SECURE DIPLOMATIC INTERFACE
STATUS : ACTIVE
SECURITY : VERIFIED
=========================================
`);
