const theadCompare = document.getElementById('theadCompare');
const compareScrollLeft = document.getElementById('compare-table__scroll-left');
const compareScrollRight = document.getElementById('compare-table__scroll-right');

function scrollCompare() {

    let compareTableHeader = document.getElementById('compare-table__header');
    let compareTableBody = document.getElementById('compare-table__body');
    let compareTableControl = document.getElementById('compare-table__control')

    if (compareTableHeader && compareTableControl && compareTableBody) {
        compareTableHeader = compareTableHeader.children[0]
        compareTableControl = compareTableControl.children[0];
        compareTableBody = compareTableBody.children;
        compareTableHeader.addEventListener('scroll', function (event) {
            compareTableControl.scrollLeft = compareTableHeader.scrollLeft;

            for (let i = 0; i < compareTableBody.length; i++) {
                let item = compareTableBody[i].children
                for (let j = 0; j < item.length; j++) {

                    item[j].scrollLeft = compareTableHeader.scrollLeft;
                }
            }
        });

        compareTableControl.addEventListener('scroll', function (event) {
            compareTableHeader.scrollLeft = compareTableControl.scrollLeft;

            let item = '';

            for (let i = 0; i < compareTableBody.length; i++) {
                item = compareTableBody[i].children
                for (let j = 0; j < item.length; j++) {

                    item[j].scrollLeft = compareTableControl.scrollLeft;
                }
            }

        });

        for (let i = 0; i < compareTableBody.length; i++) {
            let item = compareTableBody[i].children;

            for (let j = 0; j < item.length; j++) {

                item[j].addEventListener('scroll', function (event) {
                    compareTableHeader.scrollLeft = item[j].scrollLeft;
                    compareTableControl.scrollLeft = item[j].scrollLeft;
                });

            }

        }

        compareScrollRight.addEventListener('click', function (event) {
            compareTableHeader.scrollLeft += 100;

        });

        compareScrollLeft.addEventListener('click', function (event) {
            compareTableHeader.scrollLeft -= 100;

        });
    }

}
scrollCompare()