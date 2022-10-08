console.dir('injected');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.subject === 'DOMInfo') {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    var domInfo = {
      num_images: document.querySelectorAll("img").length,
      inputs: document.querySelectorAll('input').length,
      buttons: document.querySelectorAll('button').length,
    };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(domInfo);
  }
});