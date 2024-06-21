let pop = document.getElementById('noty');
let list = document.getElementById('list'); 
let up = document.getElementById('up');

pop.onclick = function () {
    list.style.opacity = 1;
};

list.onclick = function () {
    list.style.opacity = 0;
};


up.onclick = function () {
    scroll(0,0);
};

onscroll = function () {
    if (this.scrollY >= 400)
        {
            up.style.opacity = 1;
        }else {
            up.style.opacity = 0;
        }
};