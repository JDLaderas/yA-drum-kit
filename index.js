let numberDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberDrums; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

	function handleClick() {
		alert("I got clicked!");
	}
}
