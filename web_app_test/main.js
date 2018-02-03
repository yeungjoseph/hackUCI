var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');


form.onsubmit = function(event) {
    // override default behavior
    event.preventDefault();

    uploadButton.innerHTML = "Uploading...";

    //rest of the code

    
}
