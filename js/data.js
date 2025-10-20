import { getRandomInt, getRandomArrayElement, createArray } from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
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
  const comments = createArray(commentsCount, () =>
    generateComment(getRandomInt(1, 1000000))
  );

  return {
    id,
    url: photos/${id}.jpg,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments,
  };
}

export function generatePhotos() {
  return createArray(25, generatePhoto);
}