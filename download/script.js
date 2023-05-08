function showIframe() {
    var iframeContainer = document.getElementById("iframe-container");
    iframeContainer.style.display = "flex";
    iframeContainer.innerHTML = "<iframe src='https://github.com/ak9mee/educationalaudios/archive/refs/tags/music.zip'></iframe>";

    setTimeout(function() {
        iframeContainer.style.display = "none";
        iframeContainer.innerHTML = "";
    }, 5000);
}
