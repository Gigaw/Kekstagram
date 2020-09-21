'use strict';

(function(){
    var form = document.querySelector('.upload-form');
    var uploadOverlay = document.querySelector('.upload-overlay');

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var data = new FormData(form);
        window.backend.upload(data, window.backend.onError, function(response){
            uploadOverlay.classList.add('hidden');
        } )
    })
}())