function downloadAndAlert() {
    var url = "https://github.com/ak9mee/educationalaudios/archive/refs/tags/music.zip"; // Replace with the URL of the file you want to download
    var fileName = "music.zip"; // Replace with the desired name and extension of the file
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var blob = new Blob([this.response], {type: 'application/zip'}); // Replace 'application/pdf' with the MIME type of your file
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(link.href);
            alert('File downloaded successfully!');
        }
    };
    xhr.send();
}
