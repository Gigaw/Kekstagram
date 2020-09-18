(function(){
    var overlay = document.querySelector('.gallery-overlay');
    var currentPicture = document.querySelector('.picture');
    var keksPictures = document.querySelectorAll('.pictures .picture');
    var galleryOverlayClose = document.querySelector('.gallery-overlay-close');

    // window.backend.load(function(response){
    //     picturesInfo = response;
    //     console.log(picturesInfo);
    // }, window.backend.onError);
    // console.log(picturesInfo);
   

    window.overlay = {
        overlayOpen : function(){
            window.overlay.overlayElement.classList.remove('hidden');
        },
        overlayClose: function(){
            window.overlay.overlayElement.classList.add('hidden');
        },
        overlayElement :  document.querySelector('.gallery-overlay')
    }
    
    showBigPicture = function(picture, pictures){//показывает увеличенное изображение с лайками и комментариями
        var img = picture.src;
        var overlay = window.overlay.overlayElement;
        var currentPicture = pictures.filter(function(el){
            return el === img;
        });
        var comments = createComments(currentPicture);

        overlay.querySelector('.gallery-overlay-image').src = currentPicture.url;
        overlay.querySelector('.likes-count').textContent = currentPicture.likes;
        overlay.querySelector('.gallery-overlay-controls-comments').appendChild(comments);

        console.log(1);
        window.overlay.overlayOpen();

    }

    var createComments = function(commentsArr){//собирает коментарии к фотографии в виде html элементов
        var fragment = document.createDocumentFragment();
        var commentTemplate = document.querySelector('#comment-template').content.querySelector('.comment');
        commentsArr.forEach(function(el){
            var template = commentTemplate.cloneNode(true);

            template.querySelector('.comment__author-img').src = 'img/user01.png';
            template.querySelector('.comment__author-name').textContent = el.name;
            template.querySelector('.comment__author-message').textContent = el.message;

            fragment.appendChild(template);
        })

        return fragment;
    }
    // window.overlay.overlayOpen();
    // showBigPicture(currentPicture);
    
    for(let i = 0; i< keksPictures.length; i++){
        keksPictures[i].addEventListener('click', function(evt){
            evt.preventDefault();
            showBigPicture(evt.currentTarget, );
        })
    }
    
    galleryOverlayClose.addEventListener('click', function(evt){
        evt.preventDefault();
        window.overlay.overlayClose();
    })
}())
