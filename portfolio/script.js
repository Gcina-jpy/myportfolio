// Simple interactivity for buttons
document.querySelector('.download-cv').addEventListener('click', () => {
    alert('Downloading CV...');
});

document.querySelector('.contact-info').addEventListener('click', () => {
    alert('Contact info clicked!');
});

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".intro h2");
    const nameText = nameElement.textContent;

    nameElement.innerHTML = `<span class="animated-text">${nameText}</span>`;
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate tech stack icons with GSAP
    const icons = document.querySelectorAll('.icon');

    gsap.fromTo(
        icons,
        { opacity: 0, scale: 0.8, y: 50 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.tech-stack',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        }
    );
});

