
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
  var website = "localhost:3000/suggestions";
  localStorage.setItem("altText", altTextInput);
  chrome.tabs.create({ url: website });
});


async function lookForEmailAddress() {
  return null;
}

});
