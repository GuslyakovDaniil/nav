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
