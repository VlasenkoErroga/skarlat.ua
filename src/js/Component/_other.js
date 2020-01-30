//COMMENT TO ORDER
function AddComent(){
    const toggleComment = document.getElementById('add-coment');
    const placeComment = document.getElementById('add-coment-place');

    if(toggleComment){
        toggleComment.addEventListener('click', () => {
            toggleComment.checked ? placeComment.disabled = false: placeComment.disabled = true;
        });
    }
    
}
AddComent();

//BASKET REMOVE PRODUCT ITEM IN ORDER PAGE
function basketRemoveProductItem(){
    let btnClose = document.getElementsByClassName('basket-item__close close');
    
    if(btnClose){
        for(let item of btnClose){
            item.addEventListener('click', function (e){
                this.parentElement.remove()
            });
        }
    }
    
}
basketRemoveProductItem();

//SCROLL PAGE IN UP
function scrollPageUp(){
    const arrowTop = document.getElementById('btn-up');

    if(arrowTop){
        arrowTop.addEventListener('click', function(e){
            console.log(e)
            window.scrollTo({
                top: 0,
                left: pageXOffset,
                behavior: 'smooth'});
        })
        
          window.addEventListener('scroll', function(e) {
            arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight / 2);
          });
    }
}
scrollPageUp();

//CARD PRODUCT BUTTON FAVORITE|BUY|BALANCE
function addProductInAction(){
    const btnFavorite = document.getElementsByClassName('product-item__wrapper-block-btn_favorite');
    const btnBalance = document.getElementsByClassName('product-item__wrapper-block-btn_balance');
    const btnBuy = document.getElementsByClassName('product-item__wrapper-block-btn_buy');    
    const btnProdDetailFavor = document.getElementsByClassName('product-detail__btn-favorite');
    const btnProdDetailBalance = document.getElementsByClassName('product-detail__btn-balance');
    const btnProdDetailShare = document.getElementsByClassName('product-detail__btn-share');

    function activeBtn(...arr){
        for(let element of arr){
            for(let item of element){
                item.addEventListener('click', function (e){
                    this.classList.toggle('active');
                });
            }
        }
    }

    activeBtn(btnFavorite ? btnFavorite:[] , btnBalance ? btnBalance:[], btnBuy ? btnBuy:[], btnProdDetailFavor ? btnProdDetailFavor : [], btnProdDetailBalance ? btnProdDetailBalance : [], btnProdDetailShare ? btnProdDetailShare : []);
}
addProductInAction();

//PAGE WISH LIST REMOVE PRODUCT
function removeProductWishList(){
    let productRemove = document.getElementsByClassName('product-item--remove');

    for(let item of productRemove){
        item.addEventListener('click', function (e){
            this.parentElement.parentElement.remove()
        });
    }
}
removeProductWishList();

//PAGE CATALOG_PRODUCT REMOVE WAY
function removeFilterWay(){
    let arrWayItem = document.getElementsByClassName('way-filter__item');

    for(let item of arrWayItem){
        item.addEventListener('click', function (e){
            if(this.className.trim('') == 'way-filter__item way-filter__item-clear'){
                console.log(document.getElementsByClassName('way-wrapper')[0].remove());
                return
            }
            this.remove();
        });
    }
}
removeFilterWay();

function removeButronBasket(){
    const closeButron = document.getElementsByClassName('jumbotron-basket-close')[0];
    if(closeButron){
    closeButron.addEventListener('click', function(e){
        closeButron.parentElement.parentElement.parentElement.remove();
    })
}
}
removeButronBasket()


function toggleSeo(item){
    if(item){ item.addEventListener('click', function(){
        this.remove();
        document.getElementsByClassName('seo-content-prev')[0].classList.remove('seo-content-prev');
    })

}
}

toggleSeo(document.getElementById('seo-collapse-btn'));

function flipSocial(){
    let socialBlock = document.getElementsByClassName('product-detail__btn-support')[0];
    if(socialBlock){
        socialBlock.addEventListener('click', function(e){
            if(e.target.className == 'product-detail__btn-share active'){
                socialBlock.classList.add('active');
            } else if(e.target.className != 'product-detail__btn-share'){
                socialBlock.classList.remove('active');
            }
        })
    }
    
}

flipSocial();