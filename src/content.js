console.dir('injected');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if (msg.subject === 'DOMInfo') {
        // Collect the necessary data. 
        // (For your specific requirements `document.querySelectorAll(...)`
        //  should be equivalent to jquery's `$(...)`.)
        const info = document.querySelectorAll("img");
		const name_arr = [];
		
		for (let i = 0; i < info.length; i++) {
			if (info[i].getAttribute('alt') == undefined) {
				name_arr.push(info[i].src);
			}
		}
        // Directly respond to the sender (popup), 
        // through the specified callback.
        response(name_arr);
    }
});