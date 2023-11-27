const header = document.createElement('header');
const header_cont = document.querySelector('.header_cont');
const cont = document.querySelector('.container');
let odobrity_btn = document.createElement('button')
let login = document.createElement('button')
login.classList.add('odobrity_btn')
login.innerHTML = "Login"
const headerLeft = document.createElement('div');
headerLeft.classList.add('header_left');
const logo = document.createElement('div');
logo.classList.add('logo');
const logoImage = document.createElement('img');
logoImage.src = 'logo.svg';
logoImage.alt = '';
logo.appendChild(logoImage);
logoImage.classList.add('logo_kinoarea');
logoImage.onclick = () => {
    location.assign('/')
}
const socials = document.createElement('div');
socials.classList.add('socials');
const socialLinks = [
    { href: '#', src: 'vk-logo.svg', alt: 'VK' },
    { href: '#', src: 'instagram-logo.svg', alt: 'Instagram' },
    { href: '#', src: 'facebook-logo.svg', alt: 'Facebook' },
    { href: '#', src: 'twitter-logo.svg', alt: 'Twitter' }
];
socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.href = link.href;
    const socialImage = document.createElement('img');
    socialImage.classList.add('social');
    socialImage.src = link.src;
    socialImage.alt = link.alt;
    socialLink.appendChild(socialImage);
    socials.appendChild(socialLink);
});
headerLeft.appendChild(logo);
headerLeft.appendChild(socials);
const headerCenter = document.createElement('div');
headerCenter.classList.add('header_center');
const navigationLinks = [
    'Афиша', 'Медиа', 'Фильмы', 'Актёры', 'Новости', 'Подробки', 'Категории'
];
navigationLinks.forEach(linkText => {
    const navLink = document.createElement('nav');
    const navigationAnchor = document.createElement('a');
    navigationAnchor.classList.add('navigation');
    navigationAnchor.href = '#';
    navigationAnchor.textContent = linkText;
    navLink.appendChild(navigationAnchor);
    headerCenter.appendChild(navLink);
});
const headerRight = document.createElement('div');
headerRight.classList.add('header_right');
const searchButton = document.createElement('button');
searchButton.classList.add('search_btn');
const searchButtonImage = document.createElement('img');
searchButtonImage.classList.add('search_btn_img');
searchButtonImage.src = 'search_btn_icon.svg';
searchButtonImage.alt = '';
searchButton.appendChild(searchButtonImage);
const enterButton = document.createElement('button');
enterButton.classList.add('enter_btn');
enterButton.onclick = () => {
    window.location.href = `http://localhost:5176/acc/acc.html`
}
enterButton.textContent = 'Войти';
headerRight.appendChild(searchButton);
headerRight.appendChild(enterButton);
header.appendChild(headerLeft);
header.appendChild(headerCenter);
header.appendChild(headerRight);
header_cont.appendChild(header)
cont.appendChild(header_cont)
document.body.before(cont);