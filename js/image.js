(function(){
    var FILE_TYPES = ['gif', 'png', 'jpg', 'jpeg'];

    var imgChooser = document.querySelector('.upload-image input[type = file]');
    var preview = document.querySelector('.effect-image-preview');

    imgChooser.addEventListener('change', function(){
        var file = imgChooser.files[0];
        var fileName = file.name.toLowerCase();

        var matches = FILE_TYPES.some(function(el){
            return fileName.endsWith(el);
        })

        if(matches){
            var reader = new FileReader;

            reader.addEventListener('load', function(){
                preview.src = reader.result;
            })

            reader.readAsDataURL(file);
        }
    })
}())