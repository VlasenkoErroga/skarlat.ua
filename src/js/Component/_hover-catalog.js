function hoverCatalog(item) {
    let shadowblock = document.createElement('div');
    shadowblock
        .classList
        .add('shadow', 'fade', 'show');

    for (let i of item) {
        i.addEventListener('mouseenter', function () {
            shadowblock.style.zIndex = "3";
            document
                .body
                .append(shadowblock)
        });
        i.addEventListener('mouseleave', function () {
            document
                .body
                .lastChild
                .remove()
        });
    }
}

hoverCatalog(document.getElementsByClassName('cat_btn-hover'));
