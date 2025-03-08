document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.style.background = "linear-gradient(135deg, #1c1c1c, #252525)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #f0f0f0, #d6d6d6)";
        document.body.style.color = "black";
    }
});
