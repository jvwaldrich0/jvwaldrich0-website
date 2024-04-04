particlesJS("particles", {
    particles: {
        number: {
            value: 300,
            density: {
                enable: true,
                value_area: 6000
            }
        },
        color: {
            value: "#97b3c9"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 10,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "down",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 50,
                duration: 0.1
            },
            push: {
                particles_nb: 5
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
