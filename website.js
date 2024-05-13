/*MENU*/
function Menu() {
  const navIcon = document.getElementById('nav-icon');
  const navigation = document.getElementById('navigation');
  
  if (navigation.classList.contains('show-nav')) {
    navigation.classList.remove('show-nav');
    navIcon.src = '/icons-logo/nav-bar.png';
  } else {
    navigation.classList.add('show-nav');
    navIcon.src = '/icons-logo/exit-nav.png';
  }
}
/*GALLERY*/
const galleryItems = [
  { src: '/gallery/cheesy-hungarian.jpg', alt: 'Photo 1', category: 'food' },
  { src: '/gallery/chicken-D-mushroom-alfredo.jpg', alt: 'Photo 2', category: 'food' },
  { src: '/gallery/chicken-skin-nachos.jpg', alt: 'Photo 3', category: 'food' },
  { src: '/gallery/club-sandwich.jpg', alt: 'Photo 4', category: 'food' },
  { src: '/gallery/diko-alam.jpg', alt: 'Photo 5', category: 'food' },
  { src: '/gallery/grilled-porkchop.jpg', alt: 'Photo 6', category: 'food' },
  { src: '/gallery/hungarian-sandwich.jpg', alt: 'Photo 7', category: 'food' },
  { src: '/gallery/meat-overlord-sandwich.jpg', alt: 'Photo 8', category: 'food' },
  { src: '/gallery/oreo-waffle.jpg', alt: 'Photo 9', category: 'food' },
  { src: '/gallery/onion-rings.jpg', alt: 'Photo 10', category: 'food' },
  { src: '/gallery/premium-corned-beef.jpg', alt: 'Photo 11', category: 'food' },
  { src: '/gallery/skinless-longganisa.jpg', alt: 'Photo 12', category: 'food' },
  { src: '/gallery/stuffed-bread.jpg', alt: 'Photo 13', category: 'food' },
  { src: '/gallery/food29.jpg', alt: 'Photo 14', category: 'food' },
  { src: '/gallery/food2.jpg', alt: 'Photo 15', category: 'food' },
  { src: '/gallery/food28.jpg', alt: 'Photo 16', category: 'food' },
  { src: '/gallery/food4.jpg', alt: 'Photo 17', category: 'food' },
  { src: '/gallery/food5.jpg', alt: 'Photo 18', category: 'food' },
  { src: '/gallery/food6.jpg', alt: 'Photo 19', category: 'food' },
  { src: '/gallery/food7.jpg', alt: 'Photo 20', category: 'food' },
  { src: '/gallery/food8.jpg', alt: 'Photo 21', category: 'food' },
  { src: '/gallery/food9.jpg', alt: 'Photo 22', category: 'food' },
  { src: '/gallery/food10.jpg', alt: 'Photo 23', category: 'food' },
  { src: '/gallery/food11.jpg', alt: 'Photo 24', category: 'food' },
  { src: '/gallery/food12.jpg', alt: 'Photo 25', category: 'food' },
  { src: '/gallery/food13.jpg', alt: 'Photo 26', category: 'food' },
  { src: '/gallery/food14.jpg', alt: 'Photo 27', category: 'food' },
  { src: '/gallery/food15.jpg', alt: 'Photo 28', category: 'food' },
  { src: '/gallery/food16.jpg', alt: 'Photo 29', category: 'food' },
  { src: '/gallery/food17.jpg', alt: 'Photo 30', category: 'food' },
  { src: '/gallery/food18.jpg', alt: 'Photo 31', category: 'food' },
  { src: '/gallery/food19.jpg', alt: 'Photo 32', category: 'food' },
  { src: '/gallery/food20.jpg', alt: 'Photo 33', category: 'food' },
  { src: '/gallery/food21.jpg', alt: 'Photo 34', category: 'food' },
  { src: '/gallery/food22.jpg', alt: 'Photo 35', category: 'food' },
  { src: '/gallery/food23.jpg', alt: 'Photo 36', category: 'food' },
  { src: '/gallery/food24.jpg', alt: 'Photo 37', category: 'food' },
  { src: '/gallery/food25.jpg', alt: 'Photo 38', category: 'food' },
  { src: '/gallery/food26.jpg', alt: 'Photo 39', category: 'food' },
  { src: '/gallery/food27.jpg', alt: 'Photo 40', category: 'food' },
  { src: '/gallery/drink1.jpg', alt: 'Photo 41', category: 'drink' },
  { src: '/gallery/drink2.jpg', alt: 'Photo 42', category: 'drink' },
  { src: '/gallery/drink3.jpg', alt: 'Photo 43', category: 'drink' },
  { src: '/gallery/drink4.jpg', alt: 'Photo 44', category: 'drink' },
  { src: '/gallery/drink5.jpg', alt: 'Photo 45', category: 'drink' },
  { src: '/gallery/drink6.jpg', alt: 'Photo 46', category: 'drink' },
  { src: '/gallery/drink7.jpg', alt: 'Photo 47', category: 'drink' },
  { src: '/gallery/drink8.jpg', alt: 'Photo 48', category: 'drink' },
  { src: '/gallery/drink9.jpg', alt: 'Photo 49', category: 'drink' },
  { src: '/gallery/drink10.jpg', alt: 'Photo 50', category: 'drink' },
  { src: '/gallery/drink11.jpg', alt: 'Photo 51', category: 'drink' },
  { src: '/gallery/drink12.jpg', alt: 'Photo 52', category: 'drink' },
  { src: '/gallery/drink13.jpg', alt: 'Photo 53', category: 'drink' },
  { src: '/gallery/drink14.jpg', alt: 'Photo 54', category: 'drink' },
  { src: '/gallery/drink15.jpg', alt: 'Photo 55', category: 'drink' },
  { src: '/gallery/drink16.jpg', alt: 'Photo 56', category: 'drink' },
  { src: '/gallery/drink17.jpg', alt: 'Photo 57', category: 'drink' },
  { src: '/gallery/drink18.jpg', alt: 'Photo 58', category: 'drink' },
  { src: '/gallery/drink19.jpg', alt: 'Photo 59', category: 'drink' },
  { src: '/gallery/drink20.jpg', alt: 'Photo 60', category: 'drink' },
  { src: '/gallery/drink21.jpg', alt: 'Photo 61', category: 'drink' },
  { src: '/gallery/drink22.jpg', alt: 'Photo 62', category: 'drink' },
  { src: '/gallery/drink23.jpg', alt: 'Photo 63', category: 'drink' },
  { src: '/gallery/drink24.jpg', alt: 'Photo 64', category: 'drink' },
  { src: '/gallery/drink25.jpg', alt: 'Photo 65', category: 'drink' },
  { src: '/gallery/drink26.jpg', alt: 'Photo 66', category: 'drink' },
  { src: '/gallery/drink27.jpg', alt: 'Photo 67', category: 'drink' },
  { src: '/gallery/oreo.jpg', alt: 'Photo 68', category: 'drink' },
  { src: '/gallery/strawberry.jpg', alt: 'Photo 69', category: 'drink' },
  { src: '/gallery/strawberry-drink.jpg', alt: 'Photo 70', category: 'drink' },
  { src: '/gallery/menu1.jpg', alt: 'Photo 71', category: 'food' },
  { src: '/gallery/menu2.jpg', alt: 'Photo 72', category: 'food' },
  { src: '/gallery/menu3.jpg', alt: 'Photo 73', category: 'food' },
  { src: '/gallery/menu4.jpg', alt: 'Photo 74', category: 'food' },
  { src: '/gallery/performance1.mp4', alt: 'Video 1', category: 'video' },
  { src: '/gallery/performance2.mp4', alt: 'Video 2', category: 'video' },
  { src: '/gallery/performance3.mp4', alt: 'Video 3', category: 'video' },
  { src: '/gallery/performance4.mp4', alt: 'Video 4', category: 'video' },
  { src: '/gallery/performance5.mp4', alt: 'Video 5', category: 'video' },
  { src: '/gallery/performance6.mp4', alt: 'Video 6', category: 'video' },
  { src: '/gallery/performance7.mp4', alt: 'Video 7', category: 'video' },
  { src: '/gallery/performance8.mp4', alt: 'Video 8', category: 'video' }
];

const navigationLinks = document.querySelectorAll('.gallery-navigation a');
const galleryContainer = document.querySelector('.gallery-gallery-items');

navigationLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.getAttribute('data-category');
    filterSelection(category);
  });
});

function filterSelection(category) {
  const items = galleryItems.filter((item) => {
    return item.category === category || category === 'all';
  });
  renderGalleryItems(items);

  if (category === 'food' || category === 'drink' || category === 'video') {
    hideContentExcept(category);
    if (category === 'video') {
      document.querySelector('.photos').style.display = 'none';
      document.querySelector('.videos').style.display = 'block';
      document.querySelector('.videos').setAttribute('style', '');
      document
    } else {
      document.querySelector('.videos').style.display = 'none';
      document.querySelector('.photos').style.display = 'block';
      document.querySelector('.photos').setAttribute('style', '');
    } 
  } else {
    document.querySelector('.photos').style.display = 'block';
    document.querySelector('.videos').style.display = 'block';
    document.querySelector('.photos').setAttribute('style', '');
    document.querySelector('.videos').setAttribute('style', '');
  }
}

function hideContentExcept(category) {
  const allItems = document.querySelectorAll('.gallery-gallery-item');
  allItems.forEach((item) => {
    if (!item.classList.contains(category)) {
      item.style.display = 'none';
    } else {
      item.style.display = 'inline-block';
    }
  });
}

function renderGalleryItems(items) {
  galleryContainer.innerHTML = '';
  items.forEach((item) => {
    if (item.category !== 'video') {
      const galleryItem = document.createElement('div');
      galleryItem.className = `gallery-gallery-item ${item.category}`;
      if (item.src.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.controls = true;
        video.src = item.src;
        galleryItem.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        galleryItem.appendChild(img);
      }
      galleryContainer.appendChild(galleryItem);
    }
  });
  rearrangeItems();
}



function rearrangeItems() {
  const items = document.querySelectorAll('.gallery-gallery-item');
  items.forEach((item) => {
    item.style.display = 'inline-block';
  });
}

renderGalleryItems(galleryItems);

/*CONTACT*/
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    window.alert("Submitted!");
  });
});

