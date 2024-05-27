function anim() {

// Passe den Pfad zur exportierten JSON-Datei an
    const animationContainer = document.getElementById('animation-container');
    const animationPath = animationContainer.getAttribute('data-lottie-animation');

// Lade die Animation
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg', // Wähle den Renderer (z. B. 'svg' oder 'canvas')
        loop: true,
        autoplay: true,
        path: animationPath
    });
    return animation;
}

window.onload = anim;

/*

const startLottieAnimation = (element) => {
    const player = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: JSON.parse(
            element.getAttribute('data-animation-loop'),
        ),
        autoplay: false, // Setze autoplay auf false
        animationData: JSON.parse(element.getAttribute('data-lottie-animation')),
    });
    player.setSpeed(0.6);
    return player; // Gib den Player zurück
};

scrollLottie();
 */
