const modalStart = new bootstrap.Modal(
    document.getElementById("modal-start"));
modalStart.show();
const modalGift = new bootstrap.Modal(
    document.getElementById("modal-gift"));
const modalSnower = new bootstrap.Modal(
	document.getElementById("modal-snower"));
document.getElementById("gift2").addEventListener("click", () => {
	modalGift.show();
});
document.getElementById("snower").addEventListener("click", () => {
	modalSnower.show();
});
document.getElementById('btn-close-mStart').addEventListener('clcik', () => {
    
})