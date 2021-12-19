const $ = (id) => {
	return document.getElementById(id);
};

const CLICK_EVENT = "click";
const bgSound = new Howl({
	src: ["sound/bg-sound.mp3"],
	volume: 0.5,
	loop: true
});
const meowPurrSound = new Howl({
	src: ["sound/meowpurrsound.mp3"],
	onplay: () => {
		bgSound.volume(0.2);
	},
	onend: () => {
		bgSound.volume(0.5);
	}
});
const soundBell = new Howl({
	src: ["sound/bellsound.mp3"],
	onplay: () => {
		bgSound.volume(0.2);
	},
	onend: () => {
		bgSound.volume(0.5);
	}
});
const meowSound = new Howl({
	src: ["sound/meowsound.mp3"],
	onplay: () => {
		bgSound.volume(0.1)
	}
});
const pianoSound = new Howl({
	src: ["sound/piano.mp3"],
	volume: 0.3,
	onplay: () => {
		bgSound.pause()
	},
	onend: () => {
		bgSound.play();
	}
});

const modalStart = new bootstrap.Modal($("modal-start"));
const modalGift = new bootstrap.Modal($("modal-gift"));
const modalSnower = new bootstrap.Modal($("modal-snower"));

$('btn-close-mStart').addEventListener(CLICK_EVENT, () => {
	bgSound.play()
})
$("gift2").addEventListener(CLICK_EVENT, () => {
	modalGift.show();
	pianoSound.play();
});
$("snower").addEventListener(CLICK_EVENT, () => {
	modalSnower.show();
});

$("bell").addEventListener(CLICK_EVENT, () => {
	soundBell.play();
});
$("meow").addEventListener(CLICK_EVENT, async () => {
	await meowSound.play();
	await meowPurrSound.play();
});

screen.orientation.lock('landscape')
modalStart.show();