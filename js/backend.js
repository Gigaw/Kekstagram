(function(){
    window.backend = {
        load : function(onSuccess, onError){
            var URL = 'https://javascript.pages.academy/kekstagram/data';
            var xhr = new XMLHttpRequest;
            xhr.responseType = 'json';

            xhr.addEventListener('load', function(){
                var error;

                switch(xhr.status){
                    case 200:
                        onSuccess(xhr.response);
                        break;
                    case 404:
                        error = 'Информация не найдена';
                        break;
                    default:
                        error = 'Статус запроса :: ' + xhr.status + ' ' + xhr.statusText;
                }
                if(error){
                    onError(error);
                }

            })
            xhr.open('GET', URL);
            xhr.send();
        },
        upload: function(data, onError, onSuccess){ 
            var URL = 'https://javascript.pages.academy/kekstagram';
            var xhr = new XMLHttpRequest;
            xhr.responseType = 'json';

            xhr.addEventListener('load', function(evt){
                var error;

                switch(xhr.status){
                    case 200:
                        onSuccess(xhr.response);
                        break;
                    case 404:
                        error = 'Информация не найдена';
                        break;
                    default:
                        error = 'Статус запроса :: ' + xhr.status + ' ' + xhr.statusText;
                }
                if(error){
                    onError(error);
                }
            })
            xhr.open('POST', URL);
            xhr.send(data);
        },
        onError: function(message){
            console.error(message);
        }
    }
}())