var slider = [

    {
        title : 'Test Title 1',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam praesentium fuga ullam tenetur ea!',
        img : 'img/00.jpg'
    },

    {
        title : 'Test Title 2',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam praesentium fuga ullam tenetur ea!',
        img : 'img/01.jpg'
    },

    {
        title : 'Test Title 3',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam praesentium fuga ullam tenetur ea!',
        img : 'img/02.jpg'
    },

    {
        title : 'Test Title 4',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam praesentium fuga ullam tenetur ea!',
        img : 'img/03.jpg'
    },

    {
        title : 'Test Title 5',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam praesentium fuga ullam tenetur ea!',
        img : 'img/04.jpg'
    }
];

var settings = {
    time : 3000
};

var interval;
var index = 0;
var sliderCount = slider.length;

const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

renderSlider();
autoChange();

rightBtn.addEventListener('click', function() {
    index++;

    if(index >= sliderCount)
        index = 0;

    renderSlider();
});

leftBtn.addEventListener('click', function() {
    index--;

    if(index < 0)
        index = sliderCount - 1;

    renderSlider();
});

leftBtn.addEventListener('mouseenter', function() {
    clearInterval(interval);
});

rightBtn.addEventListener('mouseenter', function() {
    clearInterval(interval);
});

leftBtn.addEventListener('mouseleave', function() {
    autoChange();
});

rightBtn.addEventListener('mouseleave', function() {
    autoChange();
});


function autoChange() {

    interval = setInterval(function() {
        index++;

        if(index >= sliderCount)
            index = 0;

        renderSlider();
    }, settings.time);
}


function renderSlider() {
    const img = document.querySelector('#slider-img');
    const text = document.querySelector('#text');
    const title = document.querySelector('#title');

    img.setAttribute('src', slider[index].img);
    text.innerText = slider[index].text;
    title.innerText = slider[index].title;
}