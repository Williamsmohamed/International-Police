// ======================================
// INTERNATIONAL POLICE PROFILE SYSTEM
// ======================================

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');

            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 1200);
    }
});

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});
});

// Active Navigation Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === #${current}
        ) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Animated Statistics Counters
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = ${Math.ceil(count + increment)};

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                updateCounter();

                counterObserver.unobserve(counter);
            }
        });

    });

    counterObserver.observe(counter);

});

// Digital Clock
function updateClock() {

    const clock = document.getElementById('live-clock');

    if (!clock) return;

    const now = new Date();

    clock.innerHTML =
        now.toLocaleTimeString('en-US', {
            hour12: false
        });

}

setInterval(updateClock, 1000);
updateClock();

// Current Year
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Verification Button Animation
const verifyButton = document.querySelector('.verify-btn');

if (verifyButton) {

    verifyButton.addEventListener('click', () => {

        verifyButton.innerHTML =
            "VERIFYING SECURITY CREDENTIALS...";

        verifyButton.classList.add('verifying');

        setTimeout(() => {

            verifyButton.innerHTML =
                "IDENTITY VERIFIED";

            verifyButton.classList.remove('verifying');
            verifyButton.classList.add('verified');

        }, 2500);

    });

}

// Mission Cards Hover Glow
const missionCards =
    document.querySelectorAll('.mission-card');

missionCards.forEach(card => {

    card.addEventListener('mousemove', e => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');

    });

});

// Parallax Background
window.addEventListener('scroll', () => {

    const hero = document.querySelector('.hero');

    if (!hero) return;

    const scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.4 + 'px';

});

// Scroll Progress Bar
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {

    if (!progressBar) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + '%';

});

// Security Clearance Card Flip
const clearanceCards =
    document.querySelectorAll('.clearance-card');

clearanceCards.forEach(card => {

    card.addEventListener('click', () => {

        card.classList.toggle('flipped');

    });

});

// Console Welcome Message
console.log(`
=================================================
INTERNATIONAL POLICE PROFILE SYSTEM
DIPLOMATIC SECURITY INTERFACE
STATUS: ACTIVE
SECURITY LEVEL: VERIFIED
=================================================
`);
