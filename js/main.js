window.onload = () => {
    (() => {
        let activeState = false;

        let navOpenButton = document.getElementById('nav-open');
        let navDrawer = document.getElementById('main-navigation');

        navOpenButton.addEventListener('click', e => {
            navDrawer.classList.toggle('nav-active');
            navOpenButton.classList.toggle('nav-active');
        });
    })();

    (() => {
        document.getElementById('json-show-info').addEventListener('click', () => {
            const empData = require('../empdetails.json');

            console.table(empData);

            empData.jsonstr.map((employee, index) => {
                console.log(employee, index);
            })
        });
    })();
}