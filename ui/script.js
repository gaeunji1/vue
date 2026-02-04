const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

// 1. Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Active Section for Dots
function updateActiveSection() {
    let currentSectionIndex = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSectionIndex);
    });
}

scrollContainer.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveSection);
});

// 3. Dot Click Navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});