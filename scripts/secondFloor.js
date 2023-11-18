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
    const yOffset = -halfScreenHeight / 30; // Поднимаем вверх

    // Центрирование viewBox с отрицательными отступами
    svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${screenWidth} ${screenHeight}`);

    // Обновление атрибутов ширины и высоты
    svg.setAttribute('width', screenWidth);
    svg.setAttribute('height', screenHeight);


// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', updateSVG);
window.addEventListener('resize', updateSVG);

function createPopup() {
    const popup = document.createElement('div');
    popup.style.position = 'absolute';
    popup.style.display = 'none';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popup.style.border = '1px solid black';
    popup.style.padding = '10px';
    popup.style.zIndex = '100';
    document.body.appendChild(popup);
    return popup;
}

// Создаем всплывающие окна для каждой комнаты
const popupRoom1 = createPopup();
const popupRoom2_1 = createPopup();
const popupRoom2_2 = createPopup();
const popupRoom2_3 = createPopup();
const popupRoom2_4 = createPopup();
const popupRoom2_5 = createPopup();
const popupRoom3 = createPopup();
const popupRoom4_1 = createPopup();
const popupRoom4_2 = createPopup();
const popupRoom4_3 = createPopup();
const popupRoom5 = createPopup();
const popupRoom6 = createPopup();
const popupRoom7 = createPopup();
const popupRoom8 = createPopup();
const popupRoom9 = createPopup();
const popupRoom10 = createPopup();
const popupRoom11 = createPopup();
const popupRoom12 = createPopup();
const popupRoom13 = createPopup();
const popupRoom14 = createPopup();
const popupRoom15 = createPopup();
const popupRoom16 = createPopup();
const popupRoom17 = createPopup();
const popupRoom18 = createPopup();
const popupRoom19 = createPopup();
const popupRoom20 = createPopup();
const popupRoom21 = createPopup();
const popupRoom22 = createPopup();
const popupRoom23 = createPopup();
const popupRoom24 = createPopup();
const popupRoom25 = createPopup();

const roomTexts = {
    1: {
        text: '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.',
        image: '/img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    '2.1': {
        text: 'Text for Room 2.1',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    3: {
        text: 'Text for Room 3',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    4: {
        text: 'Text for Room 4',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    5: {
        text: 'Text for Room 5',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    6: {
        text: 'Text for Room 6',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    7: {
        text: 'Text for Room 7',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    8: {
        text: 'Text for Room 8',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    9: {
        text: 'Text for Room 9',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    10: {
        text: 'Text for Room 10',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    11: {
        text: 'Text for Room 11',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    12: {
        text: 'Text for Room 12',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    13: {
        text: 'Text for Room 13',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    14: {
        text: 'Text for Room 14',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    15: {
        text: 'Text for Room 15',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    16: {
        text: 'Text for Room 16',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    17: {
        text: 'Text for Room 17',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
    18: {
        text: 'Text for Room 18',
        image: 'img/Karmanobv.jpg', // Замените на путь к вашему изображению
    },
};

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

    const room2 = document.getElementById('room-2_1');
    room2.setAttribute('x', 0.15 * screenWidth);
    room2.setAttribute('y', 0.071 * screenHeight);
    room2.setAttribute('width', 0.17 * screenWidth);
    room2.setAttribute('height', 0.07 * screenHeight);

    const room21 = document.getElementById('room-2_2');
    room21.setAttribute('x', 0.227 * screenWidth);
    room21.setAttribute('y', 0.021 * screenHeight);
    room21.setAttribute('width', 0.059 * screenWidth);
    room21.setAttribute('height', 0.12 * screenHeight);

    const room22 = document.getElementById('room-2_3');
    room22.setAttribute('x', 0.256 * screenWidth);
    room22.setAttribute('y', 0.001 * screenHeight);
    room22.setAttribute('width', 0.03 * screenWidth);
    room22.setAttribute('height', 0.1 * screenHeight);

    const room2d = document.getElementById('room-2_4');
    room2d.setAttribute('x', 0.15 * screenWidth);
    room2d.setAttribute('y', 0.071 * screenHeight);
    room2d.setAttribute('width', 0.17 * screenWidth);
    room2d.setAttribute('height', 0.07 * screenHeight);

    const room2d2 = document.getElementById('room-2_5');
    room2d2.setAttribute('x', 0.227 * screenWidth);
    room2d2.setAttribute('y', 0.021 * screenHeight);
    room2d2.setAttribute('width', 0.059 * screenWidth);
    room2d2.setAttribute('height', 0.12 * screenHeight);

    const room3 = document.getElementById('room-3');
    room3.setAttribute('x', 0.285 * screenWidth);
    room3.setAttribute('y', 0.001 * screenHeight);
    room3.setAttribute('width', 0.0576 * screenWidth);
    room3.setAttribute('height', 0.14 * screenHeight);

    const room4 = document.getElementById('room-4_1');
    room4.setAttribute('x', 0.343 * screenWidth);
    room4.setAttribute('y', 0.001 * screenHeight);
    room4.setAttribute('width', 0.064 * screenWidth);
    room4.setAttribute('height', 0.14 * screenHeight);

    const room41 = document.getElementById('room-4_2');
    room41.setAttribute('x', 0.363 * screenWidth);
    room41.setAttribute('y', 0.031 * screenHeight);
    room41.setAttribute('width', 0.064 * screenWidth);
    room41.setAttribute('height', 0.11 * screenHeight);

    const room4d = document.getElementById('room-4_3');
    room4d.setAttribute('x', 0.343 * screenWidth);
    room4d.setAttribute('y', 0.001 * screenHeight);
    room4d.setAttribute('width', 0.064 * screenWidth);
    room4d.setAttribute('height', 0.14 * screenHeight);

    const room5 = document.getElementById('room-5');
    room5.setAttribute('x', 0.485 * screenWidth);
    room5.setAttribute('y', 0.001 * screenHeight);
    room5.setAttribute('width', 0.064 * screenWidth);
    room5.setAttribute('height', 0.14 * screenHeight);
    //Нижний ряд по центру
    const room6 = document.getElementById('room-6');
    room6.setAttribute('x', 0.21 * screenWidth);
    room6.setAttribute('y', 0.395 * screenHeight);
    room6.setAttribute('width', 0.04 * screenWidth);
    room6.setAttribute('height', 0.145 * screenHeight);

    const room7 = document.getElementById('room-7');
    room7.setAttribute('x', 0.25 * screenWidth);
    room7.setAttribute('y', 0.395 * screenHeight);
    room7.setAttribute('width', 0.04 * screenWidth);
    room7.setAttribute('height', 0.145 * screenHeight);

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
window.addEventListener('resize', updateSearchBarSize);// Добавляем обработчики события click для каждой комнаты
function addRoomClickHandler(roomElement, roomNumber, popup, roomTexts) {
    roomElement.addEventListener('click', function (event) {
        event.stopPropagation();
        closeAllPopups(); // Закрываем все всплывающие окна
        showRoomInfo(roomNumber, popup, roomTexts);
    });
}
// Функция для отображения информации о комнате
function showRoomInfo(roomNumber, popup, roomTexts) {
    // Получаем информацию о комнате из объекта roomTexts
    const roomInfo = roomTexts[roomNumber];

    // Получаем элемент комнаты по её номеру
    const room = document.getElementById('room-' + roomNumber);

    // Получаем координаты комнаты
    const x = parseFloat(room.getAttribute('x'));
    const y = parseFloat(room.getAttribute('y'));

    // Создаем элемент изображения
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', roomInfo.image); // Устанавливаем источник изображения
    imageElement.setAttribute('alt', 'Room Image');
    imageElement.style.width = '100%';

    // Добавляем стили для максимальной ширины и высоты
    imageElement.style.maxWidth = '350px'; // Замените на ваш желаемый максимальный размер
    imageElement.style.maxHeight = '250px'; // Замените на ваш желаемый максимальный размер

    // Создаем элемент текста
    const textElement = document.createElement('div');
    
    // Ограничиваем количество символов в строке
    const maxCharsPerLine = 45; // Замените на ваше желаемое количество символов
    const lines = [];
    
    for (let i = 0; i < roomInfo.text.length; i += maxCharsPerLine) {
        lines.push(roomInfo.text.slice(i, i + maxCharsPerLine));
    }

    textElement.innerHTML = lines.join('<br>');

    // Очищаем содержимое всплывающего окна
    popup.innerHTML = '';

    // Добавляем изображение и текст во всплывающее окно
    popup.appendChild(imageElement);
    popup.appendChild(textElement);

    // Устанавливаем позицию всплывающего окна
    popup.style.left = '0.4%';
    popup.style.top = '25%';

    // Показываем всплывающее окно
    popup.style.display = 'block';
}
// Добавляем обработчики события click для каждой комнаты
addRoomClickHandler(room1, 1, popupRoom1, roomTexts);
addRoomClickHandler(room21, '2.1', popupRoom2_1, roomTexts);
addRoomClickHandler(room3, 3, popupRoom3, roomTexts);
addRoomClickHandler(room4, 4, popupRoom4, roomTexts);
addRoomClickHandler(room5, 5, popupRoom5, roomTexts);
addRoomClickHandler(room6, 6, popupRoom6, roomTexts);
addRoomClickHandler(room7, 7, popupRoom7, roomTexts);
addRoomClickHandler(room8, 8, popupRoom8, roomTexts);
addRoomClickHandler(room9, 9, popupRoom9, roomTexts);
addRoomClickHandler(room10, 10, popupRoom10, roomTexts);
addRoomClickHandler(room11, 11, popupRoom11, roomTexts);
addRoomClickHandler(room12, 12, popupRoom12, roomTexts);
addRoomClickHandler(room131, 13, popupRoom13, roomTexts);
addRoomClickHandler(room14, 14, popupRoom14, roomTexts);
addRoomClickHandler(room15, 15, popupRoom15, roomTexts);
addRoomClickHandler(room16, 16, popupRoom16, roomTexts);
addRoomClickHandler(room17, 17, popupRoom17, roomTexts);
addRoomClickHandler(room18, 18, popupRoom18, roomTexts);

// Обработчик события click для закрытия всех всплывающих окон
function closeAllPopups() {
    popupRoom1.style.display = 'none';
    popupRoom2_1.style.display = 'none';
    popupRoom3.style.display = 'none';
    popupRoom4.style.display = 'none';
    popupRoom5.style.display = 'none';
    popupRoom6.style.display = 'none';
    popupRoom7.style.display = 'none';
    popupRoom8.style.display = 'none';
    popupRoom9.style.display = 'none';
    popupRoom10.style.display = 'none';
    popupRoom11.style.display = 'none';
    popupRoom12.style.display = 'none';
    popupRoom13.style.display = 'none';
    popupRoom14.style.display = 'none';
    popupRoom15.style.display = 'none';
    popupRoom16.style.display = 'none';
    popupRoom17.style.display = 'none';
    popupRoom18.style.display = 'none';
}

// Добавляем обработчик события click для закрытия всплывающего окна при клике вне его области
document.addEventListener('click', closeAllPopups);

// Функция для отображения координат комнаты
function showRoomCoordinates(roomNumber, popup, roomTexts) {
    const room = document.getElementById('room-' + roomNumber);
    const x = parseFloat(room.getAttribute('x'));
    const y = parseFloat(room.getAttribute('y'));

    // Устанавливаем содержимое всплывающего окна
    popup.innerHTML = roomTexts[roomNumber].text || 'No text available'; // Using roomTexts object

    // Устанавливаем позицию всплывающего окна
    popup.style.left = (x + room.clientWidth) + 'px';
    popup.style.top = y + 'px';

    // Показываем всплывающее окно
    popup.style.display = 'block';
}
document.getElementById('filterBtn').addEventListener('click', function () {
    var popup = document.getElementById('filterPopup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function selectCategory(labelElement) {
    labelElement.classList.toggle('selected');
}

document.getElementById('seasonBtn').addEventListener('click', function () {
    toggleDropdown('seasonOptions');
});

document.getElementById('genderBtn').addEventListener('click', function () {
    toggleDropdown('genderOptions');
});

document.getElementById('ratingBtn').addEventListener('click', function () {
    toggleDropdown('ratingOptions');
});

// Add event listeners for label clicks in each category
document.querySelectorAll('.dropdown-content label').forEach(function (label) {
    label.addEventListener('click', function () {
        selectCategory(label);
    });
});