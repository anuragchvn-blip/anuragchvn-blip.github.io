document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fileInput = document.getElementById('file-upload');
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];

        var formData = new FormData();
        formData.append('file-upload', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    } else {
        alert('Please select a file to upload');
    }
});