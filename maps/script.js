const buttons = document.querySelector('.buttons');

// Speichert alle "circles" Elemente des SVGs in einem Array
const circles = document.getElementsByTagName('circle');

// Löscht alle "circles" ausser die mit einem data-name tag
const citys = Array.from(circles).filter(city => isCity(city));

let swiss = document.getElementById("g9452").getElementsByTagName("circle");
swiss = Array.from(swiss)
console.log(swiss)

citys.forEach(city => {
    const newButton = document.createElement('button');
    newButton.dataset.id = city.id;
    newButton.innerHTML = city.dataset.name;
    newButton.addEventListener('click', showCity);
    buttons.appendChild(newButton);
});

function showCity($event) {
    const selectedCity = document.querySelector(`#${$event.target.dataset.id}`);
    selectedCity.classList.toggle('show');
}

function isCity(city) {
    return city.dataset.name;
}

function showSwiss() {

    swiss.forEach(elm => elm.classList.toggle('show'));

}