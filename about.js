// Reveal sections when scrolling

const sections = document.querySelectorAll(
    ".about-section, .mission-card, .value-card, .team-content"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});