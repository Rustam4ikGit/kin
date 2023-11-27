const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzg4MWUxOThmNjQ5MTNjYTY4NTdkYTQ0ZDNiODJmMSIsInN1YiI6IjY0ZGY3ZWFkYjc3ZDRiMTE0MjVmYThlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH3G3YZKPn3HqmZltY2N7yROjE8MF5ltvTmDWmQGY8Q';

const container = document.querySelector("header .container");
const logo_div = document.createElement('div');
const nav = document.createElement('nav');
const acc_div = document.createElement('div');
const confirmBtn = document.querySelector('.confirm');
const loginBtn = document.querySelector('.login');
const userIMG = document.querySelector('.userava');
const userFullName = document.querySelector('.username');
const logoutBtn = document.querySelector('.logout');
const glav_box = document.querySelector('.view_profile');

logo_div.classList.add('logo');
nav.classList.add('menu');
acc_div.classList.add('profile');

container.append(logo_div, nav, acc_div);

loginBtn.onclick = () => {
    loginBtn.style.display = "none";
};

loginBtn.onclick = () => {
    fetch('https://api.themoviedb.org/4/auth/request_token', {
        method: 'POST',
        dataType: 'json',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        start_time: new Date().getTime()
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                const reqToken = res.request_token;
                window.open(`https://www.themoviedb.org/auth/access?request_token=${res.request_token}`);
                loginBtn.style.display = "none";
            }
        });
};

confirmBtn.onclick = () => {
    fetch(`https://api.themoviedb.org/4/auth/access_token`, {
        method: 'POST',
        dataType: 'json',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            request_token: reqToken
        }),
        start_time: new Date().getTime()
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                localStorage.setItem('user_auth', JSON.stringify(res));
                loginBtn.style.display = "none";
                setTimeout(function () {
                    alert("Профиль успешно создан");
                }, 800);
                if (confirmBtn.parentElement) {
                    confirmBtn.parentElement.removeChild(confirmBtn);
                }
                const backTipoModal = document.querySelector('.back_tipo_modal');
                if (backTipoModal) {
                    backTipoModal.classList.add('hidden');
                    backTipoModal.addEventListener('transitionend', () => {
                        backTipoModal.remove();
                    });
                }
            }
        });
};

logoutBtn.onclick = () => {
    localStorage.removeItem('user_auth');
    const backTipoModal = document.querySelector('.back_tipo_modal');
    if (backTipoModal) {
        backTipoModal.remove();
    }
};

document.getElementById('showLinks').onclick = () => {
    let linkContainer = document.getElementById('linkContainer');
    linkContainer.classList.toggle('hidden');
};

let user_auth = JSON.parse(localStorage.getItem('user_auth')) || null;

if (user_auth) {
    fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
    })
        .then(res => res.json())
        .then(res => {
            userIMG.src = `https://www.gravatar.com/avatar/${res.avatar.gravatar.hash}`;
            userFullName.innerHTML = "doniyor34";
        });
}

glav_box.append(userIMG, userFullName);