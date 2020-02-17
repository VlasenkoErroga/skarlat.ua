

export function productPills(){
    const PRODUCT_NAV = document.getElementById('product-detail-pills-tab');
    const PRODUCT_MINI = document.getElementById('product-mini');

    if(PRODUCT_NAV){
        if(window.matchMedia('(max-width: 991px)').matches){
            PRODUCT_NAV.parentElement.parentElement.classList.remove('col-lg-7', 'col-xl-8');
            PRODUCT_NAV.parentElement.parentElement.classList.add('col-12');
        } else{
            if(document.getElementById('product-detail-pills-allInform-tab').classList.contains('active')){
                PRODUCT_NAV.parentElement.parentElement.classList.remove('col-lg-7', 'col-xl-8');
                PRODUCT_NAV.parentElement.parentElement.classList.add('col-12');
            } else{
                PRODUCT_NAV.parentElement.parentElement.classList.add('col-lg-7', 'col-xl-8');
            }
            
            PRODUCT_NAV.addEventListener('click', function(e){
                e.currentTarget.scrollTo({
                    left: e.target.getBoundingClientRect().left,
                    behavior: 'smooth'
                });

                if(e.target.id != 'product-detail-pills-allInform-tab' && window.matchMedia('(min-width: 992px)').matches){
                    PRODUCT_NAV.parentElement.parentElement.classList.add('col-lg-7', 'col-xl-8');
                    PRODUCT_NAV.parentElement.parentElement.classList.remove('col-12');
                    PRODUCT_MINI.classList.add('d-lg-block');
                } else{
                    PRODUCT_NAV.parentElement.parentElement.classList.remove('col-lg-7', 'col-xl-8');
                    PRODUCT_NAV.parentElement.parentElement.classList.add('col-12');
                    PRODUCT_MINI.classList.remove('d-lg-block');
                }
        })
        }
    }
    
    

}
productPills()