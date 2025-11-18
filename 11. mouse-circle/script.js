document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("mousedown", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const circle = document.createElement("div");
        circle.classList.add("circle-div");

        // Position circle centered at click point
        circle.style.position = "absolute";
        circle.style.left = `${x - 35}px`; // 35 = half of 70px width
        circle.style.top = `${y - 35}px`;

        document.body.appendChild(circle);
        setTimeout(() => {
            document.body.removeChild(circle);
        }, 600);
    });
});
