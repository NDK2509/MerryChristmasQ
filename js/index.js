const CLICK_EVENT = "click";

const modalStart = new bootstrap.Modal(document.getElementById("modal-start"));
modalStart.show();
const modalGift = new bootstrap.Modal(document.getElementById("modal-gift"));
const modalSnower = new bootstrap.Modal(
	document.getElementById("modal-snower")
);

document.getElementById("gift2").addEventListener(CLICK_EVENT, () => {
	modalGift.show();
});
document.getElementById("snower").addEventListener(CLICK_EVENT, () => {
	modalSnower.show();
});
//var sound = new Howl({
//	src: ['sound/bg-sound.mp3'],
//	autoplay: true,
////loop: true,
//	volume: 0.3
//});
var soundBell = new Howl({
	src: ["sound/bellsound.mp3"],
});
var meowSound = new Howl({
	src: ["sound/meowsound.mp3"],
});
document.getElementById("bell").addEventListener(CLICK_EVENT, () => {
	soundBell.play();
});
document.getElementById("meow").addEventListener(CLICK_EVENT, () => {
	meowSound.play();
});
