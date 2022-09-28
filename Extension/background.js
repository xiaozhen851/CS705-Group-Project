chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        if (tab) {
            chrome.scripting.executeScript(
                {
                    target:{tabId: tab.id, allFrames: true},
                    func:grabImages
                },
                onResult
            )
        } else {
            alert("There are no active tabs")
        }
    })
});

function locateImages() {
    const images = document.querySelectorAll("img");
    return Array.from(images).map(image=>image.src);
}

function execScript(tab) {
    // Execute a function on a page of the current browser tab
    // and process the result of execution
    chrome.scripting.executeScript(
        {
            target:{tabId: tab.id, allFrames: true},
            func:grabImages
        },
        onResult
    )
}

function onResult(frames) {
    // If script execution failed on remote end 
    // and could not return results
    if (!frames || !frames.length) { 
        alert("Could not retrieve images from specified page");
        return;
    }
    // Combine arrays of image URLs from 
    // each frame to a single array
    const imageUrls = frames.map(frame=>frame.result)
                            .reduce((r1,r2)=>r1.concat(r2));
    // Copy to clipboard a string of image URLs, delimited by 
    // carriage return symbol  
    window.navigator.clipboard
          .writeText(imageUrls.join("\n"))
          .then(()=>{
             // close the extension popup after data 
             // is copied to the clipboard
             window.close();
          });
}
