
$(".img-camera").click(function() {
    $("#file-select").click();

    var img = document.querySelector(".img-camera");
    var fileSelect = document.getElementById('file-select');
    var file = fileSelect.files[0];


    var reader = new FileReader();
    reader.addEventListener("load", function() {
        img.src = reader.result;
        img.style.width = "auto";
        img.style.border = "0px";
    });

    if (file) {
        reader.readAsDataURL(file);
    }
});
