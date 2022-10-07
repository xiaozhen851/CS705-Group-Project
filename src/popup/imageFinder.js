window.onload = function() {
  getAndSet();
};

function getAndSet(){
	document.getElementById('image_count').innerHTML = "potato";
	console.log("potato");
	chrome.tabs.query({active: true}, (tabs) => {
        const tab = tabs[0];
        if (tab) {
            alert(tab.id)
        } else {
            alert("There are no active tabs")
        }
	})
	const images = document.querySelectorAll("img");
	alert('img:'+image_arr);
}