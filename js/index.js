

const listItems = document.querySelectorAll(".item");

listItems.forEach((item) => {
    item.addEventListener(('click'), function() {
        listItems.forEach((e) => {
            e.classList.remove('active');
        });
        this.classList.add('active');
    })
})


