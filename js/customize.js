'use strict';
(function(){
  //Загрузка и фотографии и открытие редактора
  var uploadFile = document.querySelector('#upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadCancel = document.querySelector('#upload-cancel');

  uploadFile.addEventListener('change', function(evt){
      uploadOverlay.classList.remove('hidden');
  })

  uploadCancel.addEventListener('click', function(evt){
      evt.preventDefault();

      uploadOverlay.classList.add('hidden');
      uploadFile.value = '';
  })

  //Редактирование фотографиии
  var levelPin = document.querySelector('.upload-effect-level-pin');
  var levelVal = document.querySelector('.upload-effect-level-val');
  var effectLevel = document.querySelector('.upload-effect-level-line');
  var uploadImg = document.querySelector('.effect-image-preview');

  var filters = document.querySelectorAll('.upload-effect-controls input');

  // levelPin.addEventListener('mouseup', function(evt){
  //     evt.preventDefault();

  //     var level = effectLevel.offsetWidth;
  //     var currentLevel = levelVal.offsetWidth;
  //     var effectDepth = 100*currentLevel/level;

  //     uploadImg.setAttribute('style', 'filter: brightness('+ effectDepth +'%)');
  // })

  for(let i = 0; i< filters.length; i++){
      filters[i].addEventListener('change', function(evt){
          uploadImg.setAttribute('style', '');
          levelPin.style.left = 0 + 'px';
          levelVal.style.width = 0 + 'px'; 
      })
  }

  //Перетаскивание ползунка

  var effectsButtons = document.querySelectorAll('.upload-effect-controls input[type=radio]');

  levelPin.addEventListener('mousedown', function(evt){
      evt.preventDefault();

      var startCoords = {
          x: evt.clientX
      }

      var onMouseMove = function(moveEvt){
          moveEvt.preventDefault();
          var maxWidth = effectLevel.offsetWidth;
          var shift = {
              x: startCoords.x - moveEvt.clientX
          }
          startCoords = {
              x: moveEvt.clientX
          } 
          var currentLevel = levelPin.offsetLeft - shift.x; 
          if((currentLevel <= maxWidth) && (currentLevel >= 0) ){
              var effect = giveEffectName();
              var effectDepth = currentLevel/maxWidth;
              levelPin.style.left = currentLevel + 'px';
              levelVal.style.width = currentLevel + 'px';
              uploadImg.setAttribute('style', makeEffect(effect, effectDepth))
          }

          
      }

      var onMouseUp = function(upEvt){
          upEvt.preventDefault();

          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
  })

  var makeEffect = function(effect,  depth){ //Задает эффект по наименованию и глубине
      switch(effect) {
          case 'chrome':
              return 'filter: grayscale(' + depth + ')';
            break;
        
          case 'sepia':
              return 'filter: sepia(' + depth*100 + '%)';
            break;

          case 'marvin':  // if (x === 'value2')
              return 'filter: invert('+depth*100 + '%)';
            break;
          case 'fobos':  // if (x === 'value2')
              return 'filter: blur('+depth*10 + 'px)';
            break;
          case 'heat':  // if (x === 'value2')
              return 'filter: brightness('+ depth +')';
            break;      
          default:
              return 'filter: none';   
        }
  }

  var giveEffectName = function(){ // Узнает имя выбранного эффекта
      for(var i = 0; i < effectsButtons.length; i++){
          var effect = effectsButtons[i];
          if(effect.checked){
              var effectId = effect.id;
              switch (effectId) {
                  case 'upload-effect-chrome':
                    return 'chrome';
                    break;
                  case 'upload-effect-sepia':
                    return 'sepia';
                    break;
                  case 'upload-effect-marvin':
                    return 'marvin';
                    break;
                  case 'upload-effect-phobos':
                    return 'fobos';
                    break;
                  case 'upload-effect-heat':
                    return 'heat';
                    break;
                  default:
                    return 'none';
                }
          }

      }      
  }
}())
