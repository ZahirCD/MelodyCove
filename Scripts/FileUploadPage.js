// Display selected file name
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name');

fileInput.addEventListener('change', function() {
    const fileName = this.files[0].name;
    fileNameDisplay.textContent = `Selected File: ${fileName}`;
});
