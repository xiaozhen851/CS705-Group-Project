console.dir('injected');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.subject === 'DOMInfo') {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    const images_arr = Array.from(document.querySelectorAll("img"));

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(images_arr);
  }
});