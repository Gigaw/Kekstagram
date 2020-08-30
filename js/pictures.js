//переменные 
var photosUrls = [];
const photosNumber = 25;
var photosLikes = [];
var photosComments = [];
var photosDescriptions = [];
var fragment = document.createDocumentFragment();
var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
var picturesContainer = document.querySelector('.pictures');

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию,\
хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка\
случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся\
на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.' , 'Лица\
у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var descriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят' , 'Отдыхаем...',
'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

//Заполнение массива изображений
for(var i = 1; i <= photosNumber; i ++ ){
    photosUrls.push('photos/' + i +'.jpg');
}
//Заполнение массива лайков
for(var i = 0; i < photosNumber.length; i++){
    photosLikes.push(randomInteger(15, 200));
    close.log('привет')
}
//Заполнение массива комментариев 
for(var i = 0; i < photosNumber.length; i++){
    var commentsNumber = randomInteger(1, 2); //Рандомное количество комментариев
    for(var j = 0; j < commentsNumber; j++){
        var comment = comments[randomInteger(0, comments.length -1)];
        photosComments.push(comment);
    }
}
//Заполнение массива описания фотографий
for(var i = 0; i< photosUrls.length; i++){
    var description = descriptions[randomInteger(0, descriptions.length -1)];
    photosDescriptions.push(description);
}


//Функция генерации фотографий
function generatePhoto(template, photo, likes, comments){
    var picture = template.cloneNode(true);
 //   var comment;
    picture.querySelector('img').src = photo;
    picture.querySelector('.picture-likes').textContent = likes ; 
    // for(var i = 0; i < comments.length; i++){
    //     comment += comments[i] + ' ';
    // }
    picture.querySelector('.picture-comments').textContent = comments;

    return picture ;
}

for(var i = 0; i < photosUrls.length; i++){
    var newPicture = generatePhoto(pictureTemplate, photosUrls[i], photosLikes[i], photosComments[i]);
    fragment.appendChild(newPicture);
}


picturesContainer.appendChild(fragment);




