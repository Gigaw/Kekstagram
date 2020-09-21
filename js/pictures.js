'use strict';
(function(){
    var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');

    //Функция генерации фотографий
    function generatePhoto(template, information){
        var picture = template.cloneNode(true);
        picture.querySelector('img').src = information.url;
        return picture ;
    }

    window.addImages = function(images){
        var fragment = document.createDocumentFragment();

        images.forEach(function(el){
            var newPicture = generatePhoto(pictureTemplate, el);
            fragment.appendChild(newPicture);
        })

        picturesContainer.appendChild(fragment);

        var keksPictures = document.querySelectorAll('.pictures .picture');
        for(let i = 0; i< keksPictures.length; i++){
            keksPictures[i].addEventListener('click', function(evt){
            evt.preventDefault();
            window.showBigPicture(evt.currentTarget, images);
            })
        }

        window.pictures = images;
    }

    window.backend.load(window.addImages, window.backend.onError);



}())
