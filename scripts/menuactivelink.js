const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".menu-item");

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            links.forEach((link) => link.classList.remove("activeLink"));

            const activeId = entry.target.id;
            const activeLink = document.querySelector(
                `.menu-item[href="#${activeId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("activeLink");
            }
        }
    });
};

const sectionObserver = new IntersectionObserver(callback, {
    threshold: [0.1, 0.3, 0.5, 0.7, 0.9]
});

sections.forEach((section) => {
    sectionObserver.observe(section);
});