'use strict';
(function(){
    // var IMG_FILTER = {
    //     RECOMMENDED : document.querySelector('')
    // }

    const imgFilters = document.querySelectorAll('.filters .filters-radio');
    // const filterItems = document.querySelectorAll('.filters .filters-item');

    var shuffle = function(arr){
        var j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    imgFilters.forEach(function(el){// Добавляем обработчик на лейбл фильтра
        el.addEventListener('change', function(evt){
            // evt.preventDefault();
            updateImg(window.pictures);
        })
    })

    var sortImg = function(images){//Функция сортировки
        var pictures = images.slice(0);//Копируем массив фотографий

        imgFilters.forEach(function(el){
            if(el.checked){// Находим элемент выбранный пользователем
                switch(el.value){//Проверяем какой фильтр установил пользователь и сортируем в соответствии с этим
                    case 'recommend':
                        pictures = shuffle(pictures);
                        break;
                    case 'popular':
                        pictures.sort(function(left, right){// Сортировка по кол-ву лайков
                            return right.likes - left.likes  ; 
                        })
                        break;
                    case 'discussed':
                        pictures.sort(function(left, right){// Сортировка по кол-ву комментариев
                            return right.comments.length - left.comments.length  ; 
                        })
                        break;
                    case 'random':
                        pictures = shuffle(pictures);// Рандомная сортировка 
                        break;
                    default: 
                        break;
                }
            }

        })

        return pictures;
    }

    var updateImg = function(pictures){
        var keksPictures = document.querySelectorAll('.pictures .picture');
        keksPictures.forEach(el => {el.remove()});
        var sortedPictures = sortImg(pictures);

        window.addImages(sortedPictures);

        // console.log(1);
    }

}())