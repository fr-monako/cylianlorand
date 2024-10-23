document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("bottone1");
    const button2 = document.querySelector(".button");

    button1.addEventListener("mouseenter", () => {
        button2.classList.add("translucent");
    });

    button1.addEventListener("mouseleave", () => {
        button2.classList.remove("translucent");
    });

    // Add fade-up animation delay for each element
    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`; // Adjust delay as needed
        el.classList.add("fade-up");
    });
});
