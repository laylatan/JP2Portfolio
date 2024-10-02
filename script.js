function getRandomReaction() {
    var randomReact = [
        "images/pony-town-TioRafa-silly-around-eyes-tongue-500.gif",
        "images/pony-town-TioRafa-silly-tongue-500.gif",
        "images/pony-town-TioRafa-cheeky-wink-blinking-padded-500.gif",
        "images/pony-town-TioRafa-silly-wink-blinking-padded-500.gif",
        "images/pony-town-TioRafa-happy-open-mouth-500.gif"
    ];

    var number = Math.floor(Math.random() * randomReact.length);
    var imgElement = document.querySelector('#pony img');
    imgElement.src = randomReact[number];
    imgElement.classList.add('ponyGif');
}

function setupMouseEvents() {
    var patreonDiv = document.querySelector('.patreon');
    patreonDiv.addEventListener('mouseenter', getRandomReaction);
    patreonDiv.addEventListener('mouseleave', function() {
        patreonDiv.removeEventListener('mouseenter', getRandomReaction);
        setTimeout(function() {
            patreonDiv.addEventListener('mouseenter', getRandomReaction);
        }, 0);
    });
}

document.addEventListener('DOMContentLoaded', setupMouseEvents);