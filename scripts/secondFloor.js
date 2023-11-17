// Функция для обновления SVG на основе разрешения экрана
function updateSVG() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const svg = document.getElementById('my-svg');

    // Половина ширины и высоты экрана
    const halfScreenWidth = screenWidth / 2;
    const halfScreenHeight = screenHeight / 2;

    // Отрицательные отступы для поднятия и смещения влево SVG
    const xOffset = -halfScreenWidth / 2.332 // Уменьшаем влево
    const yOffset = -halfScreenHeight / 5.65; // Поднимаем вверх

    // Центрирование viewBox с отрицательными отступами
    svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${screenWidth} ${screenHeight}`);

    // Обновление атрибутов ширины и высоты
    svg.setAttribute('width', screenWidth);
    svg.setAttribute('height', screenHeight);


// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', updateSVG);
window.addEventListener('resize', updateSVG);



     //Треугольник
    const backgroundPolygon = document.getElementById('background-polygon');
    backgroundPolygon.setAttribute('points', `${0.2 * screenWidth} ${0.85*screenHeight}, ${0.2 * screenWidth} ${0.4 * screenHeight}, ${0.08 * screenWidth} ${0.4 * screenHeight}`);

    //верхний прямоугольник
    const backgroundRect1 = document.getElementById('background-rect-1');
    backgroundRect1.setAttribute('x', 0);
    backgroundRect1.setAttribute('y', 0);
    backgroundRect1.setAttribute('width', 0.55 * screenWidth);
    backgroundRect1.setAttribute('height', 0.4 * screenHeight);

    //нижний прямоугольник
    const backgroundRect2 = document.getElementById('background-rect-2');
    backgroundRect2.setAttribute('x', 0.2 * screenWidth);
    backgroundRect2.setAttribute('y', 0.3 * screenHeight);
    backgroundRect2.setAttribute('width', 0.35 * screenWidth);
    backgroundRect2.setAttribute('height', 0.55 * screenHeight);
    
    const room1 = document.getElementById('room-1');
    room1.setAttribute('x', 0.001 * screenWidth);
    room1.setAttribute('y', 0.21 * screenHeight);
    room1.setAttribute('width', 0.0645 * screenWidth);
    room1.setAttribute('height', 0.085 * screenHeight);

    const room2 = document.getElementById('room-2');
    room2.setAttribute('x', 0.15 * screenWidth);
    room2.setAttribute('y', 0.071 * screenHeight);
    room2.setAttribute('width', 0.17 * screenWidth);
    room2.setAttribute('height', 0.07 * screenHeight);

    const room21 = document.getElementById('room-21');
    room21.setAttribute('x', 0.227 * screenWidth);
    room21.setAttribute('y', 0.021 * screenHeight);
    room21.setAttribute('width', 0.059 * screenWidth);
    room21.setAttribute('height', 0.12 * screenHeight);

    const room22 = document.getElementById('room-22');
    room22.setAttribute('x', 0.256 * screenWidth);
    room22.setAttribute('y', 0.001 * screenHeight);
    room22.setAttribute('width', 0.03 * screenWidth);
    room22.setAttribute('height', 0.1 * screenHeight);

    const room2d = document.getElementById('room2d');
    room2d.setAttribute('x', 0.15 * screenWidth);
    room2d.setAttribute('y', 0.071 * screenHeight);
    room2d.setAttribute('width', 0.17 * screenWidth);
    room2d.setAttribute('height', 0.07 * screenHeight);

    const room2d2 = document.getElementById('room2d2');
    room2d2.setAttribute('x', 0.227 * screenWidth);
    room2d2.setAttribute('y', 0.021 * screenHeight);
    room2d2.setAttribute('width', 0.059 * screenWidth);
    room2d2.setAttribute('height', 0.12 * screenHeight);

    const room3 = document.getElementById('room3');
    room3.setAttribute('x', 0.285 * screenWidth);
    room3.setAttribute('y', 0.001 * screenHeight);
    room3.setAttribute('width', 0.0576 * screenWidth);
    room3.setAttribute('height', 0.14 * screenHeight);

    const room4 = document.getElementById('room4');
    room4.setAttribute('x', 0.343 * screenWidth);
    room4.setAttribute('y', 0.001 * screenHeight);
    room4.setAttribute('width', 0.064 * screenWidth);
    room4.setAttribute('height', 0.14 * screenHeight);

    const room41 = document.getElementById('room41');
    room41.setAttribute('x', 0.363 * screenWidth);
    room41.setAttribute('y', 0.031 * screenHeight);
    room41.setAttribute('width', 0.064 * screenWidth);
    room41.setAttribute('height', 0.11 * screenHeight);

    const room4d = document.getElementById('room4d');
    room4d.setAttribute('x', 0.343 * screenWidth);
    room4d.setAttribute('y', 0.001 * screenHeight);
    room4d.setAttribute('width', 0.064 * screenWidth);
    room4d.setAttribute('height', 0.14 * screenHeight);

    const room5 = document.getElementById('room5');
    room5.setAttribute('x', 0.485 * screenWidth);
    room5.setAttribute('y', 0.001 * screenHeight);
    room5.setAttribute('width', 0.064 * screenWidth);
    room5.setAttribute('height', 0.14 * screenHeight);
    //Нижний ряд по центру
    const room7 = document.getElementById('room7');
    room7.setAttribute('x', 0.21 * screenWidth);
    room7.setAttribute('y', 0.395 * screenHeight);
    room7.setAttribute('width', 0.04 * screenWidth);
    room7.setAttribute('height', 0.145 * screenHeight);

    const room8 = document.getElementById('room8');
    room8.setAttribute('x', 0.25 * screenWidth);
    room8.setAttribute('y', 0.395 * screenHeight);
    room8.setAttribute('width', 0.04 * screenWidth);
    room8.setAttribute('height', 0.145 * screenHeight);

    const room9 = document.getElementById('room9');
    room9.setAttribute('x', 0.29 * screenWidth);
    room9.setAttribute('y', 0.395 * screenHeight);
    room9.setAttribute('width', 0.04 * screenWidth);
    room9.setAttribute('height', 0.145 * screenHeight);

    const room10 = document.getElementById('room10');
    room10.setAttribute('x', 0.33 * screenWidth);
    room10.setAttribute('y', 0.395 * screenHeight);
    room10.setAttribute('width', 0.04 * screenWidth);
    room10.setAttribute('height', 0.145 * screenHeight);

    const room11 = document.getElementById('room11');
    room11.setAttribute('x', 0.37 * screenWidth);
    room11.setAttribute('y', 0.395 * screenHeight);
    room11.setAttribute('width', 0.08 * screenWidth);
    room11.setAttribute('height', 0.145 * screenHeight);
    //Верхний ряд по центру
    const room14 = document.getElementById('room14');
    room14.setAttribute('x', 0.29 * screenWidth);
    room14.setAttribute('y', 0.25 * screenHeight);
    room14.setAttribute('width', 0.04 * screenWidth);
    room14.setAttribute('height', 0.145 * screenHeight);

    const room15 = document.getElementById('room15');
    room15.setAttribute('x', 0.33 * screenWidth);
    room15.setAttribute('y', 0.25 * screenHeight);
    room15.setAttribute('width', 0.06 * screenWidth);
    room15.setAttribute('height', 0.145 * screenHeight);

    const room16 = document.getElementById('room16');
    room16.setAttribute('x', 0.39 * screenWidth);
    room16.setAttribute('y', 0.25 * screenHeight);
    room16.setAttribute('width', 0.06 * screenWidth);
    room16.setAttribute('height', 0.145 * screenHeight);

    const room17 = document.getElementById('room17');
    room17.setAttribute('x', 0.21 * screenWidth);
    room17.setAttribute('y', 0.25 * screenHeight);
    room17.setAttribute('width', 0.08 * screenWidth);
    room17.setAttribute('height', 0.145 * screenHeight);
    //Нижний ряд
    const room18 = document.getElementById('room18');
    room18.setAttribute('x', 0.24 * screenWidth);
    room18.setAttribute('y', 0.65 * screenHeight);
    room18.setAttribute('width', 0.12 * screenWidth);
    room18.setAttribute('height', 0.2 * screenHeight);

    const room19 = document.getElementById('room19');
    room19.setAttribute('x', 0.360 * screenWidth);
    room19.setAttribute('y', 0.65 * screenHeight);
    room19.setAttribute('width', 0.12 * screenWidth);
    room19.setAttribute('height', 0.2 * screenHeight);

    const room20 = document.getElementById('room20');
    room20.setAttribute('x', 0.497 * screenWidth);
    room20.setAttribute('y', 0.7 * screenHeight);
    room20.setAttribute('width', 0.025 * screenWidth);
    room20.setAttribute('height', 0.15 * screenHeight);
    //Слева от центра
    const room21d = document.getElementById('room21d');
    room21d.setAttribute('x', 0.12 * screenWidth);
    room21d.setAttribute('y', 0.25 * screenHeight);
    room21d.setAttribute('width', 0.06 * screenWidth);
    room21d.setAttribute('height', 0.076 * screenHeight);

    const room22d = document.getElementById('room22d');
    room22d.setAttribute('x', 0.106 * screenWidth);
    room22d.setAttribute('y', 0.326 * screenHeight);
    room22d.setAttribute('width', 0.074 * screenWidth);
    room22d.setAttribute('height', 0.069 * screenHeight);


    const room131 = document.getElementById('room131');
    room131.setAttribute('x', 0.2 * screenWidth);
    room131.setAttribute('y', 0.65 * screenHeight);
    room131.setAttribute('width', 0.04 * screenWidth);
    room131.setAttribute('height', 0.2 * screenHeight);

    const backgroundPolygon1 = document.getElementById('Polygon1');
    backgroundPolygon1.setAttribute('points', `${0.1999 * screenWidth} ${0.85 * screenHeight}, ${0.1999 * screenWidth} ${0.63 * screenHeight}, ${0.141 * screenWidth} ${0.63 * screenHeight}`);
    
    const room131d = document.getElementById('room131d');
    room131d.setAttribute('x', 0.199 * screenWidth);
    room131d.setAttribute('y', 0.651 * screenHeight);
    room131d.setAttribute('width', 0.035 * screenWidth);
    room131d.setAttribute('height', 0.1972 * screenHeight);
}

window.onload = updateSVG;
window.onresize = updateSVG;

function toggleMenu(menuId) {
var menu = document.getElementById(menuId);

// Скрываем все меню, кроме того, которое должно отобразиться
var allMenus = document.querySelectorAll(".filter-menu, .season-menu");
allMenus.forEach(function (item) {
    if (item.id !== menuId) {
        item.style.display = "none";
    }
});

if (window.getComputedStyle(menu).display === "block") {
    menu.style.display = "none";
} else {
    menu.style.display = "block";
}
}

document.getElementById("menuButton").addEventListener("click", function (e) {
e.stopPropagation();
toggleMenu("filterMenu");
});

document.getElementById("ageButton").addEventListener("click", function (e) {
e.stopPropagation();
toggleMenu("filterMenu");
});

document.getElementById("seasonButton").addEventListener("click", function (e) {
e.stopPropagation();
toggleMenu("seasonMenu");
});

document.getElementById("genderButton").addEventListener("click", function (e) {
e.stopPropagation();
toggleMenu("genderButton");
});

document.addEventListener("mouseup", function (e) {
var filterMenu = document.getElementById("filterMenu");
var seasonMenu = document.getElementById("seasonMenu");
var genderButton = document.getElementById("genderButton");

if (!filterMenu.contains(e.target)) {
    filterMenu.style.display = "none";
}

if (!seasonMenu.contains(e.target)) {
    seasonMenu.style.display = "none";
}
});
function updateSearchBarSize() {
const searchBar = document.getElementById('searchBar');
const screenWidth = window.innerWidth;

// Пример: изменение ширины на 80% для маленьких экранов
if (screenWidth <= 600) {
    searchBar.style.width = '80%';
} else {
    searchBar.style.width = '20%';
}
}

// Обработчики событий для кнопок перехода между этажами
document.getElementById('floorButton1').addEventListener('click', function () {
window.location.href = '1at.html'; // Переадресация на 1at.html
});

document.getElementById('floorButton2').addEventListener('click', function () {
window.location.href = '2at.html'; // Переадресация на 2at.html
});

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', updateSearchBarSize);
window.addEventListener('resize', updateSearchBarSize);