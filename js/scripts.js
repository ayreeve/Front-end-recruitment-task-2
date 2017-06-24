// jslint devel: true

/* beacons */
TweenMax.from('.beacons', 0.5, {
    scale: 1.5,
    ease: Power2.easeIn
});

/* dots 1-3 */

TweenMax.to('.dot_1', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 0.8
});

TweenMax.to('.dot_2', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 1.1
});

TweenMax.to('.dot_3', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 1.4
});

/* mobile shoe icon */

TweenMax.from('.mobile_shoe', 0.8, {
    ease: Expo.easeInOut,
    display: "none",
    scale: 1.1,
    dalay: 1.7
});

TweenMax.to('.mobile_shoe', 0.4, {
    opacity: 1,
    scale: 1,
    dalay: 2
});

/* dots 4-6 */

TweenMax.to('.dot_4', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 2.3
});

TweenMax.to('.dot_5', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 2.6
});

TweenMax.to('.dot_6', 1, {
    backgroundImage: "url('images/svg_pictures/filled_dot.svg')",
    delay: 2.9
});

/* shoe on the cloud */
TweenMax.from('.cloud_shoe', 0.4, {
    opacity: 0,
    dalay: 3.2
});

TweenMax.to('.cloud_shoe', 0.4, {
    opacity: 1,
    delay: 3.5
});

TweenMax.from('.cloud_shoe', 0.1, {
    scale: 1.4,
    delay: 3.7
});

TweenMax.to('.cloud_shoe', 0.1, {
    scale: 1.1,
    delay: 3.8
});
