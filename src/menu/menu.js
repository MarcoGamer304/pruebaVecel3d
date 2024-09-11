const loginModal = document.querySelector('#login-modal');
const openLogin= document.querySelector('#btn-open-login');
const closeLogin = document.querySelector('#btn-close-login');

const registerModal = document.querySelector('#register-modal')
const openRegister= document.querySelector('#btn-open-register');
const closeRegister = document.querySelector('#btn-close-register');

openLogin.addEventListener("click", () => {
    loginModal.showModal();
})

closeLogin.addEventListener("click", () => {
    loginModal.close();
})

openRegister.addEventListener("click", () => {
    registerModal.showModal();
})

closeRegister.addEventListener("click", () => {
    registerModal.close();
})

