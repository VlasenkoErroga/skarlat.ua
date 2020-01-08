import popper from "popper.js";
import bootstrap from "bootstrap";
import 'owl.carousel';

import '@fancyapps/fancybox/dist/jquery.fancybox';
import 'slick-carousel/slick/slick';
import 'ion-rangeslider/js/ion.rangeSlider.min';

import './_jquery';
import './_lazy';

'use strict';

window.addEventListener('resize', (e) => {
    updateWidth();
});

function updateWidth() {
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
updateWidth();

const catalogHover = document.getElementsByClassName('cat_btn-hover')[0];
const btnShowFilter = document.getElementById('btnFilter');
const mobFilte = document.getElementById('mobileFilter');
const closeFilter = document.getElementById('closeFilter');
const choiceBtn = document.getElementById('choice-btn');
const theadCompare = document.getElementById('theadCompare');
const compareScrollLeft = document.getElementById('compare-table__scroll-left');
const compareScrollRight = document.getElementById('compare-table__scroll-right');

catalogHover.addEventListener('mouseenter', function(){
        let main = document.getElementsByTagName('main')[0];
        main.classList.add('shadow');
    });

catalogHover.addEventListener("mouseleave", function(){
    let main = document.getElementsByTagName('main')[0];
    main.classList.remove('shadow');
});

//modal filter

function ToggleFilter(){
    if(btnShowFilter){
        btnShowFilter.addEventListener('click', function(){
            mobFilte.classList.add('show');
            mobFilte.classList.remove('d-none');
        });
    }
    if(closeFilter){
        closeFilter.addEventListener('click', function(){
            mobFilte.classList.remove('show');
            if(document.innerWidth > 500){
                setTimeout(function remClass(){
                    mobFilte.classList.add('d-none')
                },500)
            } else{
                mobFilte.classList.add('d-none');
            }
            
           })
           mobFilte.addEventListener('click', function(e){
               if(!e.target.closest('#FilterForm')){
                mobFilte.classList.remove('show');
                setTimeout(function remClass(){
                    mobFilte.classList.add('d-none')
                },400)
               }
           })
           choiceBtn.addEventListener('click', function(e){
             mobFilte.classList.remove('show');
             setTimeout(function remClass(){
                 mobFilte.classList.add('d-none')
             },400)
            })

    }
   
}
ToggleFilter();


function scrollCompare() {

    let compareTableHeader = document.getElementById('compare-table__header');
    let compareTableBody = document.getElementById('compare-table__body');
    let compareTableControl = document.getElementById('compare-table__control')

     if( compareTableHeader  && compareTableControl  && compareTableBody){
        compareTableHeader = compareTableHeader.children[0]
        compareTableControl = compareTableControl.children[0];
        compareTableBody = compareTableBody.children;
            compareTableHeader.addEventListener('scroll', function(event){
                compareTableControl.scrollLeft = compareTableHeader.scrollLeft;

                for( let i = 0; i < compareTableBody.length; i++){
                    let item = compareTableBody[i].children
                    for(let j = 0; j < item.length; j++){
            
                        item[j].scrollLeft = compareTableHeader.scrollLeft;
                    }
                    }
            });
        
            compareTableControl.addEventListener('scroll', function(event){
                compareTableHeader.scrollLeft = compareTableControl.scrollLeft;

                let item = '';

                for( let i = 0; i < compareTableBody.length; i++){
                    item = compareTableBody[i].children
                    for(let j = 0; j < item.length; j++){
            
                        item[j].scrollLeft = compareTableControl.scrollLeft;
                    }
                    }
        
            });

            for( let i = 0; i < compareTableBody.length; i++){
                let item = compareTableBody[i].children;
                
                for(let j = 0; j < item.length; j++){
        
                    item[j].addEventListener('scroll', function(event){
                        compareTableHeader.scrollLeft = item[j].scrollLeft;
                        compareTableControl.scrollLeft = item[j].scrollLeft;
                                });
                    
                }
        
            }
        
        
            compareScrollRight.addEventListener('click', function(event){
                compareTableHeader.scrollLeft +=100;
        
            });
        
            compareScrollLeft.addEventListener('click', function(event){
                compareTableHeader.scrollLeft -=100;
        
            });
        }

}
scrollCompare()

//pills lk

function openPillsLK(event){
    let pillsList = document.getElementsByClassName('nav-item-lk');
    let pillsListContent = document.getElementsByClassName('tab-content-lk');
    let ariaLebleElement = '';
    let pillsContentItem ='';
    let ancore;
    
    if(event){
        ancore = event.currentTarget.location.hash;
    } else {
        ancore = document.location.hash;
    }

    if(pillsList && pillsListContent[0]){
        for(let i = 0; i < pillsList.length - 1; i++){
            pillsList[i].firstElementChild.classList.remove('active');  
            
            if(pillsList[i].firstElementChild.hash == ancore){
                pillsList[i].firstElementChild.classList.add('active');
                ariaLebleElement = pillsList[i].firstElementChild.getAttribute('aria-controls');
            }
        }
            for(let j = 0; j < pillsListContent[0].children.length; j++){
                pillsListContent[0].children[j].classList.remove('show','active');
                pillsContentItem = pillsListContent[0].children[j];
                 if(ariaLebleElement == pillsContentItem.id){
                    pillsContentItem.classList.add('show','active'); 
                }
            }
    }

    if(document.getElementsByClassName('mob-menu').length > 0){
        document.getElementsByClassName('mob-menu')[0].classList.remove('mob-menu--active');
    }
    
    if(document.getElementsByClassName('modal-backdrop', 'fade', 'show').length > 0){
        document.body.lastElementChild.remove();
    }
}
openPillsLK();


window.addEventListener('hashchange', function (event){
    let pillsList = document.getElementsByClassName('nav-item-lk');
    let pillsListContent = document.getElementsByClassName('tab-content-lk');
    let ariaLebleElement = '';
    let pillsContentItem ='';
    let ancore;
    
    if(event){
        ancore = event.currentTarget.location.hash;
    } else {
        ancore = document.location.hash;
    }

    if(pillsList && pillsListContent[0]){
        for(let i = 0; i < pillsList.length - 1; i++){
            pillsList[i].firstElementChild.classList.remove('active');  
            
            if(pillsList[i].firstElementChild.hash == ancore){
                pillsList[i].firstElementChild.classList.add('active');
                ariaLebleElement = pillsList[i].firstElementChild.getAttribute('aria-controls');
            }
        }
            for(let j = 0; j < pillsListContent[0].children.length; j++){
                pillsListContent[0].children[j].classList.remove('show','active');
                pillsContentItem = pillsListContent[0].children[j];
                 if(ariaLebleElement == pillsContentItem.id){
                    pillsContentItem.classList.add('show','active'); 
                }
            }
    }
    if(document.getElementsByClassName('mob-menu').length > 0){
        document.getElementsByClassName('mob-menu')[0].classList.remove('mob-menu--active');
    }
    if(document.getElementsByClassName('modal-backdrop', 'fade', 'show').length > 0){
        document.body.lastElementChild.remove();
    }
});


//hidden filter

function hidefilter() {
    const filterFormGroupList = document.getElementsByClassName('filter__item-group');
    const showAllFilterList = document.querySelectorAll('.filter-all--show');

    if (filterFormGroupList && showAllFilterList) {

        showAllFilterList.forEach(function (element) {
            element.addEventListener('click', function () {

                element.classList.toggle('show');

                let elemtnParentLabel = this.parentElement.children;

                for (let item = 0; item < elemtnParentLabel.length - 1; item++) {

                    if(item > 4){
                        elemtnParentLabel[item].classList.toggle('filter__item--hiden');

                    }
                }
            });
        });

        //hide property filter
        for (let i in filterFormGroupList) {
            for (let j in filterFormGroupList[i].children) {
                if (j > 4 && j < filterFormGroupList[i].children.length -1) {
                    filterFormGroupList[i].children[j].classList.add('filter__item--hiden')
                }
            }
        }
    }
}
hidefilter();

function autocomplete(inp, arr) {

    if(document.getElementById("selectCity")){
        let currentFocus;

        inp.addEventListener("input", function(e) {
            let a, b, i, val = this.value;
    
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
    
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
    
            this.parentNode.appendChild(a);
    
            for (i = 0; i < arr.length; i++) {
    
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    
                b = document.createElement("DIV");
    
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
    
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    
                    b.addEventListener("click", function(e) {
    
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
    
        inp.addEventListener("keydown", function(e) {
            let x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
    
              currentFocus++;
    
              addActive(x);
            } else if (e.keyCode == 38) { 
    
              currentFocus--;
    
              addActive(x);
            } else if (e.keyCode == 13) {
              e.preventDefault();
              if (currentFocus > -1) {
                if (x) x[currentFocus].click();
              }
            }
        });
    
        function addActive(x) {
          if (!x) return false;
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          x[currentFocus].classList.add("autocomplete-active");
        }
    
        function removeActive(x) {
          for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
    
        function closeAllLists(elmnt) {
            let x = document.getElementsByClassName("autocomplete-items");
          for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
    
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
    }

   
  }
let countries = ["Afghanistan","Киев", "Харьков", "Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
autocomplete(document.getElementById("selectCity"), countries);


function preCity(){
    let input = document.getElementById("selectCity");
    let item = document.getElementsByClassName('city-way');

    for(let i = 0; i < item.length; i++){
        item[i].addEventListener('click', function(e){
            input.value = e.target.innerText;
        })
    }
}

preCity();



