var overlay = document.querySelector('.gallery-overlay');
var currentPicture = document.querySelector('.picture');
var keksPictures = document.querySelectorAll('.pictures .picture');
var galleryOverlayClose = document.querySelector('.gallery-overlay-close');

showBigPicture = function(picture){
    overlay.classList.remove('hidden');
    // console.log(picture)
    var img = picture.querySelector('img').getAttribute('src');
    var likes = 20;
    var comments =39;

    // console.log(img);

    overlay.querySelector('.gallery-overlay-image').setAttribute('src', img);
    overlay.querySelector('.likes-count').textContent = likes;
    overlay.querySelector('.gallery-overlay-controls-comments').textContent = comments;
}

// showBigPicture(currentPicture);

for(let i = 0; i< keksPictures.length; i++){
    keksPictures[i].addEventListener('click', function(evt){
        evt.preventDefault();
        showBigPicture(evt.currentTarget);
    })
}

galleryOverlayClose.addEventListener('click', function(evt){
    evt.preventDefault();
    overlay.classList.add('hidden');
})