const setDOMInfo = info => {
	document.getElementById('image_count').textContent = info.length + " images";
	document.getElementById('image_names').textContent = info;
	for (let i = 0; i < info.length; i++) {
		alert(info[i].src);
	}
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo);
  });
});