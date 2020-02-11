import popper from "popper.js";
import until from "bootstrap/js/src/util";
import modal from "bootstrap/js/src/modal";
import tooltip from "bootstrap/js/src/tooltip";
import collapse from "bootstrap/js/src/collapse";
import tab from "bootstrap/js/src/tab";
import 'owl.carousel';


import 'slick-carousel/slick/slick';
import 'ion-rangeslider/js/ion.rangeSlider.min';

import './_jquery';
import './Component/_modal-filter';
import './Component/_lazy';
import './Component/_autocomplete';
import './Component/_jumbotron-basket';
import './Component/_scroll-compare';
import './Component/_hover-catalog';
import './Component/_filter-hide';
import './Component/_slider-jquery';
import './Component/_raiting';
import './Component/_other';

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

});

//hidden filter




