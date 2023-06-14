let catsCont = document.getElementById('catsCont');

cats.forEach((cat) => {
    let catCard = document.createElement('div'); //создание карточки для каждого кота
    catCard.classList.add('cat-card');

    let catName = document.createElement('div'); //имя
    catName.classList.add('cat-name');
    catName.textContent = cat.name;

    let catImg = document.createElement('img'); //картинка
    catImg.classList.add('cat-img');
    catImg.src = cat.img_link;

    let catAgeRate = document.createElement('div'); //возраст, оценка
    catAgeRate.classList.add('cat-age-rate');
    catAgeRate.textContent = `Возраст: ${cat.age} Оценка: ${cat.rate}`;

    let catDesc = document.createElement('div'); //описание
    catDesc.classList.add('cat-desc');
    catDesc.textContent = cat.description;

    let catId = document.createElement('div'); //порядковый номер
    catId.classList.add('cat-id');
    catId.textContent = `id: ${cat.id}`;

    if (cat.favourite) {
        let favoriteStar = document.createElement('span'); //добавление звездочки если кот в избранном
        favoriteStar.classList.add('favorite-star');
        favoriteStar.textContent = '★';
        catName.appendChild(favoriteStar);
    }
    //формирование карточки
    catCard.appendChild(catId);
    catCard.appendChild(catName);
    catCard.appendChild(catImg);
    catCard.appendChild(catAgeRate);
    catCard.appendChild(catDesc);
    //добавление карточки
    catsCont.appendChild(catCard);
});