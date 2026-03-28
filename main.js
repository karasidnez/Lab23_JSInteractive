const form = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const hobbyInput = document.getElementById('hobby');
const clearBtn = document.getElementById('clearBtn');
const profileInfo = document.getElementById('profileInfo');

function displayUserInfo(name, age, city, hobby) {
    profileInfo.innerHTML = `
        <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
        <p><strong>Возраст:</strong> ${escapeHtml(age)}</p>
        <p><strong>Город:</strong> ${escapeHtml(city)}</p>
        <p><strong>Хобби:</strong> ${escapeHtml(hobby)}</p>
    `;
}

function showEmpty() {
    profileInfo.innerHTML = '<p class="empty">Нет данных. Заполните форму.</p>';
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function validateForm(name, age, city, hobby) {
    if (!name || !age || !city || !hobby) {
        alert('Пожалуйста, заполните все поля!');
        return false;
    }
    const ageNum = Number(age);
    if (isNaN(ageNum) || !/^\d+$/.test(age) || ageNum < 1 || ageNum > 120) {
        alert('Возраст должен быть числом от 1 до 120.');
        return false;
    }
    return true;
}

function handleSubmit(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();

    if (validateForm(name, age, city, hobby)) {
        displayUserInfo(name, age, city, hobby);
    }
}

function clearForm() {
    nameInput.value = '';
    ageInput.value = '';
    cityInput.value = '';
    hobbyInput.value = '';
    showEmpty();
}

form.addEventListener('submit', handleSubmit);
clearBtn.addEventListener('click', clearForm);
showEmpty();