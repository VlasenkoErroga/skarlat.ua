import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';

import '@fancyapps/fancybox/dist/jquery.fancybox';
import 'slick-carousel/slick/slick';
import 'ion-rangeslider/js/ion.rangeSlider.min';

import './_jquery';
import './Component/_lazy';
import './Component/_autocomplete';
import './Component/_jumbotron-basket';
import './Component/_scroll-compare';
import './Component/_filter-hide';
import './Component/_hover-catalog';



const btnShowFilter = document.getElementById('btnFilter');
const mobFilte = document.getElementById('mobileFilter');
const closeFilter = document.getElementById('closeFilter');
const choiceBtn = document.getElementById('choice-btn');



//modal filter

function ToggleFilter() {
    if (btnShowFilter) {
        btnShowFilter.addEventListener('click', function () {
            mobFilte
                .classList
                .add('show');
            mobFilte
                .classList
                .remove('d-none');
        });
    }
    if (closeFilter) {
        closeFilter.addEventListener('click', function () {
            mobFilte
                .classList
                .remove('show');
            if (document.innerWidth > 500) {
                setTimeout(function remClass() {
                    mobFilte
                        .classList
                        .add('d-none')
                }, 500)
            } else {
                mobFilte
                    .classList
                    .add('d-none');
            }

        })
        mobFilte.addEventListener('click', function (e) {
            if (!e.target.closest('#FilterForm')) {
                mobFilte
                    .classList
                    .remove('show');
                setTimeout(function remClass() {
                    mobFilte
                        .classList
                        .add('d-none')
                }, 400)
            }
        })
        choiceBtn.addEventListener('click', function (e) {
            mobFilte
                .classList
                .remove('show');
            setTimeout(function remClass() {
                mobFilte
                    .classList
                    .add('d-none')
            }, 400)
        })

    }

}
ToggleFilter();


//pills lk

function openPillsLK(event) {
    let pillsList = document.getElementsByClassName('nav-item-lk');
    let pillsListContent = document.getElementsByClassName('tab-content-lk');
    let ariaLebleElement = '';
    let pillsContentItem = '';
    let ancore;

    if (event) {
        ancore = event.currentTarget.location.hash;
    } else {
        ancore = document.location.hash;
    }

    if (pillsList && pillsListContent[0]) {
        for (let i = 0; i < pillsList.length - 1; i++) {
            pillsList[i]
                .firstElementChild
                .classList
                .remove('active');

            if (pillsList[i].firstElementChild.hash == ancore) {
                pillsList[i]
                    .firstElementChild
                    .classList
                    .add('active');
                ariaLebleElement = pillsList[i]
                    .firstElementChild
                    .getAttribute('aria-controls');
            }
        }
        for (let j = 0; j < pillsListContent[0].children.length; j++) {
            pillsListContent[0]
                .children[j]
                .classList
                .remove('show', 'active');
            pillsContentItem = pillsListContent[0].children[j];
            if (ariaLebleElement == pillsContentItem.id) {
                pillsContentItem
                    .classList
                    .add('show', 'active');
            }
        }
    }

    if (document.getElementsByClassName('mob-menu').length > 0) {
        document
            .getElementsByClassName('mob-menu')[0]
            .classList
            .remove('mob-menu--active');
    }

    if (document.getElementsByClassName('modal-backdrop', 'fade', 'show').length > 0) {
        document
            .body
            .lastElementChild
            .remove();
    }
}
openPillsLK();

window.addEventListener('hashchange', function (event) {
    let pillsList = document.getElementsByClassName('nav-item-lk');
    let pillsListContent = document.getElementsByClassName('tab-content-lk');
    let ariaLebleElement = '';
    let pillsContentItem = '';
    let ancore;

    if (event) {
        ancore = event.currentTarget.location.hash;
    } else {
        ancore = document.location.hash;
    }

    if (pillsList && pillsListContent[0]) {
        for (let i = 0; i < pillsList.length - 1; i++) {
            pillsList[i]
                .firstElementChild
                .classList
                .remove('active');

            if (pillsList[i].firstElementChild.hash == ancore) {
                pillsList[i]
                    .firstElementChild
                    .classList
                    .add('active');
                ariaLebleElement = pillsList[i]
                    .firstElementChild
                    .getAttribute('aria-controls');
            }
        }
        for (let j = 0; j < pillsListContent[0].children.length; j++) {
            pillsListContent[0]
                .children[j]
                .classList
                .remove('show', 'active');
            pillsContentItem = pillsListContent[0].children[j];
            if (ariaLebleElement == pillsContentItem.id) {
                pillsContentItem
                    .classList
                    .add('show', 'active');
            }
        }
    }
    if (document.getElementsByClassName('mob-menu').length > 0) {
        document
            .getElementsByClassName('mob-menu')[0]
            .classList
            .remove('mob-menu--active');
    }
    if (document.getElementsByClassName('modal-backdrop', 'fade', 'show').length > 0) {
        document
            .body
            .lastElementChild
            .remove();
    }
});

//hidden filter

