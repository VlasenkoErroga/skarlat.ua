export function updateProductInBasket() {
        let jumbotronBasketItem = document.querySelectorAll('.jumbotron-basket-item');
        let jumbotronBasketList = document.querySelector('.jumbotron-basket-list');
    
        for (let i = 0; i < jumbotronBasketItem.length - 1; i++) {
            jumbotronBasketList.style.display = 'flex';
            if (window.matchMedia('(min-width: 1420px)').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 4) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 1232px) and (max-width: 1419px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 2) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 934px) and (max-width: 1231px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 1) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 768px) and (max-width: 933px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 0) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 700px) and (max-width: 767px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 6) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 620px) and (max-width: 699px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 4) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 570px) and (max-width: 619px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 3) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 530px) and (max-width: 569px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 2) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 490px) and (max-width: 529px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 1) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(min-width: 430px) and (max-width: 489px').matches) {
                jumbotronBasketItem[i].style.display = "flex";
                if (i > 0) {
                    jumbotronBasketItem[i].style.display = "none";
                }
            } else if (window.matchMedia('(max-width: 329px').matches) {
                jumbotronBasketList.style.display = 'none';
    
            }
        }
    
}
updateProductInBasket();