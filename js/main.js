window.onload = () => {
    (() => {
        let activeState = false;

        let navOpenButton = document.getElementById('nav-open');
        let navDrawer = document.getElementById('main-navigation');

        navOpenButton.addEventListener('click', e => {
            navDrawer.classList.toggle('nav-active');
            navOpenButton.classList.toggle('nav-active');
        });

        console.log(navOpenButton,navDrawer);
    })();
}