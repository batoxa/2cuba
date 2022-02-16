function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        }
    });
}
const options = { threshold: [0.7] };
const observer = new IntersectionObserver(onEntry, options);

document
    .querySelectorAll(".element-animation")
    .forEach((element) => observer.observe(element));