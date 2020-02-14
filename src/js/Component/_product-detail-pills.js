const PRODUCT_NAV = document.getElementById('product-detail-pills-tab');
const PRODUCT_MINI = document.getElementById('product-mini');


function productPills(){

    PRODUCT_NAV.addEventListener('click', function(e){
        if(e.target.id != 'product-detail-pills-allInform-tab' && window.innerWidth > 992){
            PRODUCT_NAV.parentElement.parentElement.parentElement.classList.add('d-flex');
            PRODUCT_MINI.classList.add('d-lg-block');
        } else{
            PRODUCT_NAV.parentElement.parentElement.parentElement.classList.remove('d-flex');
            PRODUCT_MINI.classList.remove('d-lg-block');
        }
    })

}
productPills()