function animate() {

    const svg = document.getElementById("icon-javascript");
    const item = svg.getElementById("sekundenzeiger");

    const keyframes = [
        { offset: 0, transform: "rotate(0)"},
        { offset: 1, transform: "rotate(360deg)"},
    ];

    item.animate ( keyframes, {
        duration: 6000,
        delay: 0,
        fill: "forwards",
        easing: "linear", //Bonusaufgabe 1: steps(60)
        iterations: Infinity
    });
}

/* Bonusaufgabe 2
function animateAll() {
    const svg = document.getElementById("icon-javascript-all");
    const items = svg.querySelectorAll("path");

    const keyframes = [
        { offset: 0, transform: "rotate(0)" },
        { offset: 1, transform: "rotate(360deg)" },
    ];

    items.forEach(item => {
        let duration;
        let easing;

        if (item.id === "stundenzeiger") {
            duration = 43200000; // 12 hours in milliseconds
            easing = "steps(12)"
        } else if (item.id === "minutenzeiger") {
            duration = 3600000; // 1 hour in milliseconds
            easing = "steps(60)"
        } else if (item.id === "sekundenzeiger") {
            duration = 60000; // 1 minute in milliseconds
            easing = "steps(60)"
        }

        item.animate(keyframes, {
            duration: duration,
            delay: 0,
            fill: "forwards",
            easing: easing,
            iterations: Infinity,
        })
    })
}*/

document.addEventListener("DOMContentLoaded", () => {
    animate();
    //animateAll();
});