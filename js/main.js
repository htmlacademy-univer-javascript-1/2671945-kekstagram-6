function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

function createArray(length, callback) {
  return Array.from({ length }, (_, i) => callback(i + 1));
}


const MESSAGES = [
  'Всё отлично!',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Мария', 'Кекс', 'Олег', 'Том', 'Кира'];

const DESCRIPTIONS = [
  'Моё лучшее фото!',
  'Отдых на море.',
  'Мой кот — звезда!',
  'Люблю путешествовать!',
  'Настроение отличное!',
  'Вот это да!',
  'Кошачье вдохновение.'
];

function generateComment(id) {
  const messageCount = getRandomInt(1, 2);
  let message = '';

  for (let i = 0; i < messageCount; i++) {
    if (i > 0) message += ' ';
    message += getRandomArrayElement(MESSAGES);
  }

  return {
    id,
    avatar: img/avatar-${getRandomInt(1, 6)}.svg,
    message,
    name: getRandomArrayElement(NAMES),
  };
}

function generatePhoto(id) {
  const commentsCount = getRandomInt(0, 30);
  const comments = createArray(commentsCount, () => generateComment(getRandomInt(1, 1000000)));

  return {
    id,
    url: photos/${id}.jpg,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments,
  };
}

function generatePhotos() {
  return createArray(25, generatePhoto);
}

const photos = generatePhotos();
console.log(photos);