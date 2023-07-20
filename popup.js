document.addEventListener("DOMContentLoaded", function () {
    const fixFontButton = document.getElementById("fixFont");
  
    fixFontButton.addEventListener("click", function () {
        chrome.tabs.executeScript({
            code: `var styleElement = document.createElement("style");
            styleElement.innerHTML = "*{ font-family: 'Poppins' !important; }";
            document.body.appendChild(styleElement);`
          });
    });
  });
  