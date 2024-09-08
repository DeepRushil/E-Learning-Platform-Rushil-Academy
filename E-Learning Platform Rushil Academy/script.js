// Load navbar and footer components
document.getElementById("navbar").innerHTML = fetchComponent("components/navbar.html")

// Fetch component from file
function fetchComponent(url) {
	let response = ""
	const xhr = new XMLHttpRequest()
	xhr.open("GET", url, false)
	xhr.onload = () => (response = xhr.responseText)
	xhr.send()
	return response
}
function loadNavbar() {
	fetch("components/navbar.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("navbar").innerHTML = data
		})
}

document.addEventListener("DOMContentLoaded", loadNavbar)
