const buttonElement = document.querySelector(".button");
const modalElement = document.querySelector(".modal__overlay");

function openModal() {
    modalElement.classList.add("modal_visible");
}
function closeModal() {
    modalElement.classList.remove("modal_visible");
}
function handleCloseModalByEscape(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}
function handleCloseByOverlay(event) {
    if (event.target === modalElement) {
        closeModal();
    }
}



buttonElement.addEventListener("click", openModal);
document.addEventListener("keydown", handleCloseModalByEscape);
modalElement.addEventListener('click', handleCloseByOverlay);

