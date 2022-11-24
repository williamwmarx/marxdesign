/* Gallery Promo */
/* Ticking clock */
function getStudioTime() {
	var dateString = new Date().toLocaleString('en-US', {hour12: false, timeZone: 'America/New_York'}).split(" ")[1]
	const timeSpan: HTMLElement = document.getElementById("time")!;
	timeSpan.innerHTML = (dateString.length === 8) ? dateString : "0" + dateString;
}

getStudioTime();
setInterval(getStudioTime, 1000);

/* Dragable store window */
const dragElement = (element: HTMLElement, dragzone: HTMLElement) => {
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

	const dragMouseUp = () => {
		document.onmouseup = null;
		document.onmousemove = null;
		element.getElementsByClassName("window")[0].classList.remove("drag");
	};

	const dragMouseMove = (event: MouseEvent) => {
		event.preventDefault();
		pos1 = pos3 - event.clientX;
		pos2 = pos4 - event.clientY;
		pos3 = event.clientX;
		pos4 = event.clientY;
		element.style.top = `${element.offsetTop - pos2}px`;
		element.style.left = `${element.offsetLeft - pos1}px`;
	};

	const dragMouseDown = (event: MouseEvent) => {
		event.preventDefault();
		pos3 = event.clientX;
		pos4 = event.clientY;
		element.getElementsByClassName("window")[0].classList.add("drag");
		document.onmouseup = dragMouseUp;
		document.onmousemove = dragMouseMove;
	};

	dragzone.onmousedown = dragMouseDown;
};

const dragable = document.getElementById("dragable")!;
const dragzone = document.getElementById("dragzone")!;
let windowSize = dragable.getElementsByClassName("window")[0].getBoundingClientRect()
let headerHeight = document.getElementsByTagName("header")[0].getBoundingClientRect().height;
let availableHeight = window.innerHeight - windowSize.height - headerHeight;
let availableWidth = window.innerWidth - windowSize.width;
dragable.style.top = `${Math.floor((0.05 * availableHeight) + (0.3 * Math.random() * availableHeight))}px`;
dragable.style.left = `${Math.floor((0.65 * availableWidth) + (0.3 * Math.random() * availableWidth))}px`;
dragElement(dragable, dragzone);

/* OTHER */
function toggleSiteView() {
	document.getElementById("gallery-promo")!.style.visibility = "hidden";
	document.getElementById("simple")!.style.visibility = "visible";
}