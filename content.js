chrome.runtime.sendMessage({ action: "addSite" });

chrome.storage.local.get("sites", function (data) {
  const sites = data.sites || [];
  const currentUrl = new URL(window.location.href);
  const currentDomain = currentUrl.hostname;

  for (const site of sites) {
    if (currentDomain == site) { 
      console.log("Found site in list");  
      var styleElement = document.createElement("style");
      styleElement.innerHTML = "* { font-family: 'Poppins' !important; }";
      document.body.appendChild(styleElement);
      break;
    }
  }
});