'use strict';

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const movieCard = [
  {
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6H2PPxXY0yW4gfQyVl6yPRK46_X29CB7IDk5RrV3ilEhu2-XUDg',
    title: 'Стекло',
    text:
      'Невероятно умный террорист-инвалид Элайджа Прайс, который больше известен под псевдонимом Мистер Стекло, объединяется с маньяком Кевином Крамбом, в теле которого живет жестокий убийца по прозвищу Зверь, чтобы противостоять их старым врагам – спасшейся из плена Крамба, девочке-подростке Кейси и стареющему неуязвимому супергерою Дэвиду Данну.',
    date: '2019',
    rating: '6.5',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/uk/thumb/c/ce/Krytu_1918_%28Poster_UA%2C_2018%29.jpg/260px-Krytu_1918_%28Poster_UA%2C_2018%29.jpg',
    title: 'Крути 1918',
    text:
      'Художній фільм за реальною історією бою на залізничній станції Крути взимку 1918-го року. На тлі доленосних подій в країні двоє братів Андрій і Олекса Савицькі закохуються у прекрасну Софію. Більшовики підступають до Києва, місто наповнене «червоними» агентами. Уряд УНР кидає на боротьбу з ворогом усі боєздатні частини армії, включно з юнкерами і студентами. Чотири сотні юнаків, серед яких Андрій і Олекса, стають проти 4-тисячного добре озброєного війська.',
    date: '2019',
    rating: '8.6',
  },
  {
    src:
      'https://api.vkino.com.ua/posters/26/268a9e8b447ae44013f46dba678ade2f9d2a3cfa.R320x-.jpg',
    title: 'Зелена книга',
    text:
      'Витончений світський лев, багатий і талановитий музикант наймає в якості водія і охоронця людини, яка найменше підходить для цієї роботи. Тоні «Базіка» - вибивала, який не вміє тримати язика за зубами і користуватися столовими приборами, зате він добре працює кулаками. Це турне назавжди змінить життя обох.',
    date: '2019',
    rating: '6.5',
  },
  {
    src:
      'https://filmets.net/uploads/posts/2018-12/1544377433-1894218702-bamblbi.jpg',
    title: 'Бамблби',
    text:
      'Бамблби, известный робот- автобот ввязывается в жестокую битву, после которой вынужден бежать и скрывать на старой автосвалке на окраине города. Там его обнаруживает Чарли – девушка, которой вскоре исполнится восемнадцать лет, и она хочет найти свое призвание в жизни. Героиня когда-то подрабатывала автомехаником на окраине города и обнаружила помятый, но симпатичный желтый Фольксваген.Девушка постаралась вернеут машину к жизни, но в ходе разборки догадалась, что перед ней не простое средство передвижения, а настоящий автобот. Чарли поможет Бамблби спрятаться и трансформер увидит в ней верного друга, который поможет ему выполнять миссию по защите людей и Земли от серьезной опасности. Устраивайтесь поудобнее и начинайте фильм Бамблби смотреть онлайн бесплатно в хорошем качестве.',
    date: '2019',
    rating: '7.5',
  },
];
// console.log(movieCard);

const createMovieCard = ({ src, title, text, date, rating }) => {
  const box = document.querySelector('.box');
  // console.log(box);

  const movie = document.createElement('div');
  movie.classList.add('movie');
  // console.log(movie);

  const img = document.createElement('img');
  img.classList.add('movie__image');
  img.src = src;
  img.alt = 'movie image';
  // console.log(img);

  const movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');
  // console.log(movieBody);

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = title;
  // console.log(movieTitle);

  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = text;
  // console.log(movieDescription);

  const movieDate = document.createElement('p');
  movieDate.classList.add('movie__date');
  movieDate.textContent = `Released: ${date}`;
  // console.log(movieDate);

  const movieRating = document.createElement('p');
  movieRating.classList.add('movie__rating');
  movieRating.textContent = `Rating: ${rating}`;
  // console.log(movieRating);

  box.append(movie);
  movie.append(img, movieBody); //
  movieBody.append(movieTitle, movieDescription, movieDate, movieRating);

  return movie;
};

const renderingCardsItems = (card, createMovieCard) => {
  const items = card.map(item => createMovieCard(item));

  return items;
};

renderingCardsItems(movieCard, createMovieCard);
//=============================================================================
