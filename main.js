window.onload = () => {
    const loadingScreen = document.getElementById("loading-screen"); const content = document.getElementById("sayt");

    setTimeout(() => { loadingScreen.style.display = "none"; content.style.display = "block"; }, 3000);
};

let b = document.querySelector('.heart_btn'); setTimeout(() => b.focus(), 100); setTimeout(() => b.blur(), 1000);

document.querySelector('.like--button').addEventListener('click', (e) => { e.currentTarget.classList.toggle('liked'); });

function scrollFunction() {
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}