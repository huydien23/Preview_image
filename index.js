var myUpload = document.querySelector('#myupload');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

myUpload.addEventListener('change', function(e) {

    const file = myUpload.files[0];
    if(!file) return;

    if(file.name.endsWith('.jpg'))
    {
        error.innerHTML = 'The uploaded file is not valid';
        return;
    }else{
        error.innerHTML = ''; // clear error message
    }

    if(file.size / (1024 * 1024) > 5){
        error.innerHTML = 'The uploaded file is too large, please upload a file smaller than 5MB';
        return;
    }else{
        error.innerHTML = '';
    }

   const img = document.createElement('img');
    // Đổi qua Base64
    // var fileReader = new FileReader()
    // fileReader.readAsDataURL(file)
    // fileReader.onloadend = function(e){
    //     console.log('load end', e.target.result);
    //     img.src = e.target.result;
    // }
  
    img.src = URL.createObjectURL(file);
    preview.innerHTML = ''; // clear previous image
    preview.appendChild(img);
});
