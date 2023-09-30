chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "addSite") {
      const url = sender.tab.url;
      chrome.storage.local.get("sites", function (data) {
        const hostname = new URL(url).hostname;
        const sites = data.sites || [];
        if (!sites.includes(hostname)) {
          sites.push(hostname);
          chrome.storage.local.set({ sites });
        }
      });
    }
  });