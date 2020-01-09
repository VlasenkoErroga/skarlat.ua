window.addEventListener('resize', (e) => {
    updateProductInBasket();
});

function updateProductInBasket() {
    let jumbotronBasketItem = document.querySelectorAll('.jumbotron-basket-item');
    let jumbotronBasketList = document.querySelector('.jumbotron-basket-list');
    let viewPort = window.innerWidth;

    for (let i = 0; i < jumbotronBasketItem.length - 1; i++) {
        jumbotronBasketList.style.display = 'flex';
        if (viewPort >= 1420) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 4) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort < 1420 && viewPort >= 1232) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 2) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 1232 && viewPort >= 934) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 1) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 934 && viewPort >= 768) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 0) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 768 && viewPort >= 700) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 6) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 764 && viewPort >= 620) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 4) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 620 && viewPort >= 570) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 3) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 570 && viewPort >= 530) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 2) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 530 && viewPort >= 490) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 1) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 490 && viewPort >= 430) {
            jumbotronBasketItem[i].style.display = "flex";
            if (i > 0) {
                jumbotronBasketItem[i].style.display = "none";
            }
        } else if (viewPort <= 430) {
            jumbotronBasketList.style.display = 'none';

        }

    }
}
updateProductInBasket();