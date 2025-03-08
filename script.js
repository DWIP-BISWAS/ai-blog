document.addEventListener("DOMContentLoaded", () => {
    let loadingTime = Math.random() * (5000 - 2000) + 2000;

    setTimeout(() => {
        document.getElementById("skeleton-loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, loadingTime);

    // Auto Theme Detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.style.background = "linear-gradient(135deg, #1c1c1c, #252525)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #f0f0f0, #d6d6d6)";
        document.body.style.color = "black";
    }

    // Jiggly bounce on overscroll
    let lastScrollY = window.scrollY;
    let isJiggling = false;

    window.addEventListener("scroll", () => {
        if (window.scrollY < 5 || window.scrollY + window.innerHeight >= document.body.scrollHeight - 5) {
            if (!isJiggling) {
                isJiggling = true;
                document.body.classList.add("jiggle-effect");

                setTimeout(() => {
                    document.body.classList.remove("jiggle-effect");
                    isJiggling = false;
                }, 300);
            }
        }
    });
});
