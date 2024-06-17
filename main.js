let counter = 0;
const counterElement = document.getElementById('counter');
const clickableImage = document.getElementById('clickable-image');

clickableImage.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});



document.getElementById('hamster-img').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
    
    if (counter >= 5) {
        window.location.href = 'products.html';
    }
});


document.querySelector('.coin.svg').addEventListener('click', function() {
    // 200ms uchun tebranish
    navigator.vibrate(200);
  });
  