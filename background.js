// write the scraped page symbols string to storage.sync

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   
	if (request.method == "getLocalStorage"){
	chrome.storage.sync.set({
	onpagesymbols: request.key	
	})
  }

});