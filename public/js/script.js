// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/olive-garden.jpg?quality=82&strip=all',
  'https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/ihop.jpg?quality=82&strip=all',
  'https://cdn.newswire.com/files/x/31/52/af00a38f0c1549e0fee0df9e7b97.jpg',
  'https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1',
  'https://media-cdn.tripadvisor.com/media/photo-s/0e/39/85/7f/photo0jpg.jpg',
  'https://www.gyu-kaku.com/wp-content/uploads/2018/06/restaurant_lkv1806-2048x1536.jpg',
  'https://pizza-shuttle.com/wp-content/uploads/2020/07/IMG_9788.jpg',
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

