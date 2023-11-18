function updateSVG() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const svg = document.getElementById('my-svg');

    // Center the SVG within the viewport
    const xOffset = -screenWidth / 4.5; // Adjust as needed
    const yOffset = -screenHeight / 50; // Adjust as needed

    // Set viewBox with the offset values
    svg.setAttribute('viewBox', `${xOffset} ${yOffset} ${screenWidth} ${screenHeight}`);

    // Set SVG width and height
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
    const popupRoom3 = createPopup();
    const popupRoom4 = createPopup();
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
    // Добавьте класс "room-text" к каждому текстовому элементу

    //Треугольник
    const backgroundPolygon = document.getElementById('background-polygon');
    backgroundPolygon.setAttribute('points', `${0.2006 * screenWidth} ${0.85 * screenHeight}, ${0.2006 * screenWidth} ${0.4 * screenHeight}, ${0.08 * screenWidth} ${0.4 * screenHeight}`);

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

    // Удаление изображений лестниц
    const existingImages = svg.querySelectorAll('image');
    existingImages.forEach(image => {
        svg.removeChild(image);
    });

    // Создание и настройка элемента изображения (лестницы)
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    image.setAttribute('x', 0.511 * screenWidth);
    image.setAttribute('y', 0.74 * screenHeight);
    image.setAttribute('width', 0.05 * screenWidth);
    image.setAttribute('height', 0.05 * screenHeight);
    image.setAttribute('href', '/img/lest.PNG');

    svg.appendChild(image);
    

    //Вход
    const enter = document.getElementById('enter');
    enter.setAttribute('x', 0.12 * screenWidth);
    enter.setAttribute('y', 0.0 * screenHeight);
    enter.setAttribute('width', 0.3 * screenWidth);
    enter.setAttribute('height', 0.145 * screenHeight);

    //Комнаты и текст к ним:
    const room1 = document.getElementById('room-1');
    room1.setAttribute('x', 0.21 * screenWidth);
    room1.setAttribute('y', 0.25 * screenHeight);
    room1.setAttribute('width', 0.04 * screenWidth);
    room1.setAttribute('height', 0.145 * screenHeight);


    //много компонентов - НАЧАЛО=======================
    const room21 = document.getElementById('room-2.1');
    room21.setAttribute('x', 0.12 * screenWidth);
    room21.setAttribute('y', 0.25 * screenHeight);
    room21.setAttribute('width', 0.06 * screenWidth);
    room21.setAttribute('height', 0.145 * screenHeight);

    const room22 = document.getElementById('room-2.2');
    room22.setAttribute('x', 0.106 * screenWidth);
    room22.setAttribute('y', 0.326 * screenHeight);
    room22.setAttribute('width', 0.014 * screenWidth);
    room22.setAttribute('height', 0.069 * screenHeight);

    const room23 = document.getElementById('room-2.3');
    room23.setAttribute('x', 0.11 * screenWidth);
    room23.setAttribute('y', 0.327 * screenHeight);
    room23.setAttribute('width', 0.014 * screenWidth);
    room23.setAttribute('height', 0.0673 * screenHeight);
    //КОНЕЦ==============================================

    const room3 = document.getElementById('room-3');
    room3.setAttribute('x', 0.25 * screenWidth);
    room3.setAttribute('y', 0.25 * screenHeight);
    room3.setAttribute('width', 0.04 * screenWidth);
    room3.setAttribute('height', 0.145 * screenHeight);
    
    const room4 = document.getElementById('room-4');
    room4.setAttribute('x', 0.29 * screenWidth);
    room4.setAttribute('y', 0.25 * screenHeight);
    room4.setAttribute('width', 0.04 * screenWidth);
    room4.setAttribute('height', 0.145 * screenHeight);

    const room5 = document.getElementById('room-5');
    room5.setAttribute('x', 0.33 * screenWidth);
    room5.setAttribute('y', 0.25 * screenHeight);
    room5.setAttribute('width', 0.06 * screenWidth);
    room5.setAttribute('height', 0.145 * screenHeight);

    const room6 = document.getElementById('room-6');
    room6.setAttribute('x', 0.39 * screenWidth);
    room6.setAttribute('y', 0.25 * screenHeight);
    room6.setAttribute('width', 0.06 * screenWidth);
    room6.setAttribute('height', 0.145 * screenHeight);

    //2 слой
    const room7 = document.getElementById('room-7');
    room7.setAttribute('x', 0.21 * screenWidth);
    room7.setAttribute('y', 0.395 * screenHeight);
    room7.setAttribute('width', 0.04 * screenWidth);
    room7.setAttribute('height', 0.145 * screenHeight);

    const room8 = document.getElementById('room-8');
    room8.setAttribute('x', 0.25 * screenWidth);
    room8.setAttribute('y', 0.395 * screenHeight);
    room8.setAttribute('width', 0.04 * screenWidth);
    room8.setAttribute('height', 0.145 * screenHeight);

    const room9 = document.getElementById('room-9');
    room9.setAttribute('x', 0.29 * screenWidth);
    room9.setAttribute('y', 0.395 * screenHeight);
    room9.setAttribute('width', 0.04 * screenWidth);
    room9.setAttribute('height', 0.145 * screenHeight);

    const room10 = document.getElementById('room-10');
    room10.setAttribute('x', 0.33 * screenWidth);
    room10.setAttribute('y', 0.395 * screenHeight);
    room10.setAttribute('width', 0.04 * screenWidth);
    room10.setAttribute('height', 0.145 * screenHeight);

    const room11 = document.getElementById('room-11');
    room11.setAttribute('x', 0.37 * screenWidth);
    room11.setAttribute('y', 0.395 * screenHeight);
    room11.setAttribute('width', 0.08 * screenWidth);
    room11.setAttribute('height', 0.09 * screenHeight);

    const room12 = document.getElementById('room-12');
    room12.setAttribute('x', 0.37 * screenWidth);
    room12.setAttribute('y', 0.485 * screenHeight);
    room12.setAttribute('width', 0.08 * screenWidth);
    room12.setAttribute('height', 0.055 * screenHeight);

    //3 слой
    //много компонентов - НАЧАЛО========================
    const room131 = document.getElementById('room-13.1');
    room131.setAttribute('x', 0.2 * screenWidth);
    room131.setAttribute('y', 0.65 * screenHeight);
    room131.setAttribute('width', 0.04 * screenWidth);
    room131.setAttribute('height', 0.2 * screenHeight);

    const room132 = document.getElementById('room-13.2');
    room132.setAttribute('x', 0.1994 * screenWidth);
    room132.setAttribute('y', 0.751 * screenHeight);
    room132.setAttribute('width', 0.014 * screenWidth);
    room132.setAttribute('height', 0.095 * screenHeight);

    const backgroundPolygon1 = document.getElementById('background-polygon1');
    backgroundPolygon1.setAttribute('points', `${0.1999 * screenWidth} ${0.85 * screenHeight}, ${0.1999 * screenWidth} ${0.75 * screenHeight}, ${0.174 * screenWidth} ${0.75 * screenHeight}`);

    const room133 = document.getElementById('room-13.3');
    room133.setAttribute('x', 0.17 * screenWidth);
    room133.setAttribute('y', 0.63 * screenHeight);
    room133.setAttribute('width', 0.03 * screenWidth);
    room133.setAttribute('height', 0.04 * screenHeight);

    const room134 = document.getElementById('room-13.4');
    room134.setAttribute('x', 0.19 * screenWidth);
    room134.setAttribute('y', 0.651 * screenHeight);
    room134.setAttribute('width', 0.03 * screenWidth);
    room134.setAttribute('height', 0.018 * screenHeight);
    //КОНЕЦ===============================================

    const room14 = document.getElementById('room-14');
    room14.setAttribute('x', 0.24 * screenWidth);
    room14.setAttribute('y', 0.65 * screenHeight);
    room14.setAttribute('width', 0.06 * screenWidth);
    room14.setAttribute('height', 0.2 * screenHeight);

    const room15 = document.getElementById('room-15');
    room15.setAttribute('x', 0.3 * screenWidth);
    room15.setAttribute('y', 0.65 * screenHeight);
    room15.setAttribute('width', 0.06 * screenWidth);
    room15.setAttribute('height', 0.2 * screenHeight);

    const room16 = document.getElementById('room-16');
    room16.setAttribute('x', 0.36 * screenWidth);
    room16.setAttribute('y', 0.65 * screenHeight);
    room16.setAttribute('width', 0.06 * screenWidth);
    room16.setAttribute('height', 0.2 * screenHeight);

    const room17 = document.getElementById('room-17');
    room17.setAttribute('x', 0.42 * screenWidth);
    room17.setAttribute('y', 0.65 * screenHeight);
    room17.setAttribute('width', 0.06 * screenWidth);
    room17.setAttribute('height', 0.2 * screenHeight);

    const room18 = document.getElementById('room-18');
    room18.setAttribute('x', 0.497 * screenWidth);
    room18.setAttribute('y', 0.7 * screenHeight);
    room18.setAttribute('width', 0.025 * screenWidth);
    room18.setAttribute('height', 0.15 * screenHeight);
//======================================================================================
// Добавляем обработчики события click для каждой комнаты
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

}