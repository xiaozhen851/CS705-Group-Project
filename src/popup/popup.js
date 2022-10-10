
window.addEventListener("load", async function() {

let recieverEmail = await lookForEmailAddress();
if (recieverEmail == null) {
  recieverEmail = "No contact email found, please click below to add one!";
}

const emailField = document.querySelector("#sendingToEmail");
emailField.innerHTML = `<p> ${recieverEmail} </p> `;

const altTextField = document.querySelector("#altTextBox");
let altTextInput = altTextField.value;

const editEmailLink = document.querySelector("#editEmailLink");
editEmailLink.addEventListener("click", async function() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const website = `localhost:8080/#/suggestion?url=${url}`; // TODO replace all localhost:8080 with https://altit.netlify.app
    localStorage.setItem("altText", altTextInput);
    chrome.tabs.create({ url: website });
  });
});


async function lookForEmailAddress() {
  return null;
}

});
