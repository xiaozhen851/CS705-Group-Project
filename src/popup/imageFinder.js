function setDOMInfo(name_array) {
	document.getElementById('valid_image_count').textContent = name_array.length + " valid image(s) without alt text";

	const submitButton = document.getElementById('submitSuggestion');
	submitButton.classList.remove('disabled-button');

	if (name_array.length > 0){
		document.getElementById('prompt').textContent = "Select Image(s)";
	} else if (name_array.length <= 0) {
		// disable text field if no images found
		const altTextBoxField = document.getElementById("altTextBox");
		altTextBoxField.setAttribute("disabled", true);
		// disable the submit button if no images found
		submitButton.setAttribute("disabled", true);
		submitButton.classList.add('disabled-button');
	}

	for (let i = 0; i < name_array.length; i++) {
		const myDiv = document.getElementById("checkbox_div");

		// creating checkbox element
		const checkbox = document.createElement('input');

		// creating label for checkbox
		const label = document.createElement('label');

		// assigning attributes for
		// the created label tag
		label.htmlFor = "id";

		// creating the label from the src
		const last_index = name_array[i].lastIndexOf("/")+1;
		const name_string = name_array[i].slice(last_index);

		// Assigning the attributes
		// to created checkbox
		checkbox.type = "checkbox";
		checkbox.name = "img_urls";
		checkbox.src = name_array[i];
		checkbox.value = name_array[i]+'\n'
		
		// appending the created text to
		// the created label tag
		label.appendChild(document.createTextNode(name_string));

		//creating and formatting the image
		const image = document.createElement('img');
		image.src = name_array[i];
		image.width = 128;

		// appending the checkbox,
		// image and label to div
		myDiv.appendChild(image);
		myDiv.appendChild(checkbox);
		myDiv.appendChild(document.createElement('br'));
		myDiv.appendChild(label);
		myDiv.appendChild(document.createElement('br'));
	}
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id, {
                from: 'popup',
                subject: 'DOMInfo'
            },
            // ...also specifying a callback to be called
            //    from the receiving end (content script).
            setDOMInfo);
    });
});
