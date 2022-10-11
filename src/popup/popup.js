
window.addEventListener("load", async function() {

const manualEmailDiv = document.querySelector("#manualEmailEntry");
const emailField = document.querySelector("#sendingToEmail");
const altTextField = document.querySelector("#altTextBox");
const manualEmail = document.querySelector("#manualEmail");
const popUpTitle = document.querySelector("#popupNavBar");
const editEmailLink = document.querySelector("#editEmailLink");

let recieverEmail = await lookForEmailAddress();
if (recieverEmail == null) {
  recieverEmail = "No contact email found, please add one below!";
  manualEmailDiv.style.display = `block`;
}

emailField.innerHTML = `<p> ${recieverEmail} </p> `;

popUpTitle.addEventListener("click", async function() {
  const website = "https://altit.netlify.app/#/";
  chrome.tabs.create({ url: website });
});

editEmailLink.addEventListener("click", async function() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    const altTextInput = altTextField.value;
    const emailAddress = manualEmail.value;
    const url = tabs[0].url;

    // When testing on local computer, change https://altit.netlify.app to localhost:8080
    const website = `https://altit.netlify.app/#/suggestion?url=${url}&message=${altTextInput}&user_email=${emailAddress}`;
    localStorage.setItem("altText", altTextInput);
    chrome.tabs.create({ url: website });
  });
});




async function lookForEmailAddress() {
  return null;
}

});
