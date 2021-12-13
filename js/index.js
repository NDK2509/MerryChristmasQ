const modalStart = new bootstrap.Modal(document.getElementById("modal-start"));
modalStart.show();
const modalGift = new bootstrap.Modal(document.getElementById("modal-gift"));

document.getElementById("gift2").addEventListener("click", () => {
    modalGift.show();
});
