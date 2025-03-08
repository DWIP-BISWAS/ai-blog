document.addEventListener("DOMContentLoaded", function () {
    const skeletonLoader = document.getElementById("skeleton-loader");
    const contentContainer = document.querySelector(".content-container");
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    // 🔥 Simulating a delay before showing content
    setTimeout(() => {
        skeletonLoader.style.opacity = "0";
        setTimeout(() => {
            skeletonLoader.style.display = "none";
            contentContainer.classList.add("show");
        }, 1000);
    }, 2000);

    // 🔥 Hamburger Menu Toggle
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });

    // 🔥 Background Animation Effect
    const bg = document.querySelector(".animated-bg");
    let pos = 0;
    setInterval(() => {
        pos += 1;
        bg.style.backgroundPosition = `${pos}px ${pos}px`;
    }, 50);

    // 🔥 Cluster Blast Effect - Delay Each Element Randomly
    const posts = document.querySelectorAll(".post, .category-list a");
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = "1";
            post.style.transform = "scale(1) rotate(0deg)";
        }, Math.random() * 1500 + 500);
    });

    // 🔥 Smooth Scrolling for In-Page Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔥 Hover Effect for Mysterious Links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.opacity = "0.6";
            link.style.transition = "0.3s";
        });
        link.addEventListener("mouseleave", () => {
            link.style.opacity = "1";
        });
    });

    // 🔥 Ultra Premium Easter Egg (Click 5 Times Anywhere to Get a Secret Message)
    let clickCount = 0;
    document.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 5) {
            alert("🔥 Welcome to the Premium Zone. You just unlocked an Easter Egg.");
            clickCount = 0;
        }
    });

    // 🔥 Dark Mode Toggle (Extra Feature)
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.background = "#222";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀️";
        } else {
            darkModeToggle.innerText = "🌙";
        }
    });
});
