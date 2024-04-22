const slider = document.querySelector('.slider');
let intervalId;

function activate(e) {
const items = document.querySelectorAll('.item');
clearInterval(intervalId); // Clear previous interval to prevent multiple intervals running simultaneously

if (e.target.matches('.next')) {
    slider.append(items[0]);//button next action
} else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);//button next action
}

// Start a new interval to automatically loop through slides
intervalId = setInterval(() => {
    slider.append(items[0]);
}, 3000); // Change slide every 3 seconds (adjust as needed)
}

document.addEventListener('click', activate, false);

// Start the initial automatic looping
intervalId = setInterval(() => {
const items = document.querySelectorAll('.item');
slider.append(items[0]);
}, 3000); // Change slide every 3 seconds (adjust as needed)