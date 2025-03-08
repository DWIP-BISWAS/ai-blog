document.addEventListener("DOMContentLoaded", function () {
    const skeletonLoader = document.getElementById("skeleton-loader");
    const contentContainer = document.querySelector(".content-container");
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    
    // 🔥 Simulated Load Effect
    setTimeout(() => {
        skeletonLoader.style.display = "none";
        contentContainer.classList.remove("hidden");

        // Trigger cluster blast
        document.querySelectorAll(".cluster").forEach((el, index) => {
            setTimeout(() => {
                el.style.animationDelay = `${index * 0.2}s`;
                el.classList.add("animate");
            }, 100);
        });
    }, 3000);

    // 🔥 Hamburger Menu Toggle
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // 🔥 Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
