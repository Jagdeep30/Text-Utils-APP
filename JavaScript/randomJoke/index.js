let pickupLineArr = ["I hope you know CPR, because you just took my breath away!",
    " Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
    "Are you a magician, because whenever I see you, everyone else disappears!",
    "Are you a keyboard, because you're just my type.",
    "They say DisneyLand is the happiest place on earth. Wll apparently, no one has ever been standing next to you.",
    "Is your name Google?, because you have everything I've been searching for.",
    "Are you Netflix, because I could watch you for hours.",
    "If nothing lasts forever, will you be my nothing",
    "Feel my shirt. Know what it's made of? Boyfriend material.",
    "Your hand looks heavy. Can I hold it for you?"
]

let randIndex = Math.floor(Math.random()*10);


let color1 = Math.floor(Math.random()*256);
let color2 = Math.floor(Math.random()*256);
let color3 = Math.floor(Math.random()*256);
// let color4 = Math.floor(Math.random()*10);
// let color5 = Math.floor(Math.random()*10);
// let color6 = Math.floor(Math.random()*10);

// console.log

let pickupLine = document.getElementsByClassName("pl")[0];

pickupLine.innerHTML = `${pickupLineArr[randIndex]}`;
pickupLine.style.color = `rgb(${color1},${color2},${color3})`;
// pickupLine.style.color = `#${color1}${color2}${color3}${color4}${color5}${color6}`;
// pickupLine.innerHTML() = "`${pickupLineArr[randIndex]}`";

console.log(pickupLine.style.color);