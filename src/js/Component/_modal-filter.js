function ToggleFilter() {
    const mobFilte = document.getElementById('mobileFilter');
    const closeFilter = document.getElementById('closeFilter');
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