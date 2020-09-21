'use strict';
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
    
    window.showBigPicture = function(picture, pictures){//показывает увеличенное изображение с лайками и комментариями
        var img = picture.querySelector('img').getAttribute('src');
        var overlay = window.overlay.overlayElement;
        var currentPicture = pictures.find(function(el){
            if(el.url === img){
                return true
            }else {
                return false
            }
        });
        var comments = createComments(currentPicture.comments);

        overlay.querySelector('.gallery-overlay-image').src = currentPicture.url;
        overlay.querySelector('.likes-count').textContent = currentPicture.likes;
        overlay.querySelector('.comments-count').textContent = currentPicture.comments.length;
        overlay.querySelector('.gallery-overlay-comments').appendChild(comments);

        overlay.querySelectorAll('.comment').forEach(function(el, index){
            if(index < 5){
                el.classList.remove('hidden');
            }
        })

        window.overlay.overlayOpen();
        createMoreButton();

    }

    var createMoreButton = function(){
        var elementText = 'Еще комментарии';

        var element = document.createElement('div');
        var elementStyles = 'display: block; margin-top: 20px; font-size: 20px; text-align: center; border: 2px solid black'
        element.setAttribute('style', elementStyles);
        element.textContent = elementText;
        element.classList.add('gallery-overlay-comments-more-button');
        



        document.querySelector('.gallery-overlay-comments').appendChild(element);

        var moreButton = document.querySelector('.gallery-overlay-comments-more-button');

        moreButton.addEventListener('click', function(evt){
            evt.preventDefault();

            window.overlay.overlayElement.querySelectorAll('.comment.hidden').forEach(function(el, index){
                if(el){
                    if(index < 5){
                        el.classList.remove('hidden');
                    }
                }
            })

        })
    }

    var createComments = function(commentsArr){//собирает коментарии к фотографии в виде html элементов
        var fragment = document.createDocumentFragment();
        var commentTemplate = document.querySelector('#comment-template').content.querySelector('.comment');
        commentsArr.forEach(function(el){
            var template = commentTemplate.cloneNode(true);

            template.querySelector('.comment__author-img').src = 'img/user01.png';
            template.querySelector('.comment__author-name').textContent = el.name;
            template.querySelector('.comment__author-message').textContent = el.message;
            template.classList.add('hidden');

            fragment.appendChild(template);
        })



        return fragment;
    }
    // window.overlay.overlayOpen();
    // showBigPicture(currentPicture);
    
    // for(let i = 0; i< keksPictures.length; i++){
    //     keksPictures[i].addEventListener('click', function(evt){
    //         evt.preventDefault();
    //         showBigPicture(evt.currentTarget, );
    //     })
    // }
    
    galleryOverlayClose.addEventListener('click', function(evt){
        evt.preventDefault();
        window.overlay.overlayClose();
    })
}())
