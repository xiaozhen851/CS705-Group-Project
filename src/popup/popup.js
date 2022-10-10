
window.addEventListener("load", async function() {

const emailArea = document.querySelector("#emailArea");

let recieverEmail = await lookForEmailAddress();
if (recieverEmail == null) {
  recieverEmail = "No contact email found, please add one below!";
  var manualEmailDiv = document.querySelector("#manualEmailEntry");
  manualEmailDiv.style.display = `block`;
} 

const emailField = document.querySelector("#sendingToEmail");
emailField.innerHTML = `<p> ${recieverEmail} </p> `;

const altTextField = document.querySelector("#altTextBox");


const popUpTitle = document.querySelector("#popupNavBar");
popUpTitle.addEventListener("click", async function() {
  const website = "https://altit.netlify.app";
  chrome.tabs.create({ url: website });
});

const editEmailLink = document.querySelector("#editEmailLink");
editEmailLink.addEventListener("click", async function() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    const altTextInput = altTextField.value;
    const url = tabs[0].url;
    const website = `https://altit.netlify.app/#/suggestion?url=${url}&message=${altTextInput}`;
    localStorage.setItem("altText", altTextInput);
    chrome.tabs.create({ url: website });
  });
});




async function lookForEmailAddress() {
  return null;
}

});
