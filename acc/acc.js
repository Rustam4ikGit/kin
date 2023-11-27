const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
const likedActors = JSON.parse(localStorage.getItem('likeActors'));
const titleProfile = document.querySelector('.title_profile');
const itemNavs = document.querySelectorAll('.item_nav');
const infCont = document.querySelector('.inf_cont');
const userIMG = document.querySelector('.userava');
const userFullName = document.querySelector('.username');

const displayProfile = (display) => {
    userIMG.style.display = display;
    userFullName.style.display = display;
    infCont.style.display = display;
}

itemNavs.forEach(item => {
    item.onclick = () => {
        itemNavs.forEach(nav => {
            nav.classList.remove('item_nav_active');
        });
        item.classList.add('item_nav_active');
        switch (item.classList[1]) {
            case 'home':
                titleProfile.innerHTML = 'Ваш профиль';
                displayProfile("block");
                userProfile();
                break;
            case 'friends':
                titleProfile.innerHTML = 'Ваши друзья';
                displayProfile("none");
                yourFriends();
                break;
            case 'comments':
                titleProfile.innerHTML = 'Ваши отзывы';
                displayProfile("none");
                yourReviews();
                break;
            case 'likedis':
                titleProfile.innerHTML = 'Лайки и дислайки';
                displayProfile("none");
                yourRatings();
                break;
            case 'recen':
                titleProfile.innerHTML = 'Ваши коменты';
                displayProfile("none");
                yourComments();
                break;
            case 'film':
                titleProfile.innerHTML = 'Список фильмов';
                displayProfile("none");
                yourMovieList(likedMovies);
                break;
            case 'favorite':
                titleProfile.innerHTML = 'Ваш список актеров';
                displayProfile("none");
                yourCastList(likedActors);
                break;
        }
    };
});