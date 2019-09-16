document.addEventListener('DOMContentLoaded', function() {

// navbar logic

    // nav ui elements
    var navShow = document.getElementById('nav-show');
    var navShowUp = document.getElementById('nav-show-up');
    var navShowDown = document.getElementById('nav-show-down');
    var hiddenNav = document.querySelectorAll('.nav-hide');

    // default icone value
    navShowDown.style.display = 'none';
    navShowUp.style.display = 'none';

    // event listeners
    navShowDown.addEventListener('click', ()=> toggleNave());
    navShowUp.addEventListener('click', ()=> toggleNave());
    window.addEventListener('resize', () => showOrHideNav());

    // implemented fnctions:

    // toggle the dispaly for an item
    var toggleDisplay = (item) => {
        var newState =  (item.style.display === 'block'? 'none': 'block');
        item.style.display = newState;
    }

    // toggle nav elements based on window size
    var showOrHideNav = () => {
        var bigWindow = (window.innerWidth>=600? true: false );
        if(bigWindow){
            navShowDown.style.display = 'none';
            navShowUp.style.display = 'none';
            hiddenNav.forEach(item => {
                item.style.display = 'block';
            })
        }else{
            navShowDown.style.display = 'block';
            navShowUp.style.display = 'none';
            hiddenNav.forEach(item => {
                item.style.display = 'none';
            })
        }  
    }

    // toggle nav elements based on showdown/up button
    var toggleNave = () => {
        toggleDisplay(navShowDown);
        toggleDisplay(navShowUp);
        hiddenNav.forEach(item => {
            toggleDisplay(item)
        })
    }

// gallery hover logic

    var galleryImages = document.querySelectorAll('.img-container');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover',() => showImageConetnt(image));
        image.addEventListener('mouseout',() => showImageConetnt(image));
    });
    var showImageConetnt = (image) => {
        image.firstChild.classList.toggle("dimm-img");
        image.lastChild.classList.toggle("show-img-content");
    }

// testemonial carousel logic

    var left = document.getElementById('left-arrow');
    var right = document.getElementById('right-arrow');
    var testemons = Array.from(document.getElementsByClassName('main-testemon'));

    left.addEventListener('click',()=>scroll(testemons,'left') );
    right.addEventListener('click',()=>scroll(testemons,'right') );

    var index = 0;
    var scroll = (arr, direction) => {
        if(direction === 'left'){
            index = (index<=0? arr.length-1 : index-1)
        }else{
            index = (index>=arr.length-1? 0 : index+1)
        }
        
        arr.forEach(element => {
            element.classList.remove('fade-in');
            element.style.display = 'none';
        });
        arr[index].style.display = 'block';
        arr[index].classList.add('fade-in');
        
    }

// additional logic to dimm the nav and showing up arrow
    
    document.addEventListener('scroll', function() {

        // get nav and up button
        var nav = document.getElementById('navbar');
        // var up = document.getElementById('up');

        // top and bottom of the document
        var documentAtBottom = 
            (document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight/2;
        var documentAtTop = (document.documentElement.scrollTop == 0);

        // animate nav
        if(documentAtTop){
            nav.style.backgroundColor = "rgb(5, 6, 22)";
            nav.style.animation = 'navup 2s';
        }else{
            nav.style.backgroundColor = "rgba(5, 6, 22, 0.5)";
            nav.style.animation = 'navdown 2s';
        }

        // animate up button
        if(documentAtBottom){
            up.classList.remove('fadeout');
            up.classList.add('fadein');
        }else if(!documentAtBottom){
            up.classList.remove('fadein');
            up.classList.add('fadeout');
        }
    });


});

// slider logic was replaced with css animations

    // var slider = document.getElementById('slider');

    // var move = (item, position) => {
    //     item.style.left = `${position}px`;
    // }

    // var sleep = (miliseconds) => {
    //     var currentTime = new Date().getTime();
    
    //     while (currentTime + miliseconds >= new Date().getTime()) {
    //     }
    // }

    // var position = -650;
    // var i = 0;

    // setInterval(()=> {
    //     move(slider, position);
    //     console.log(position)
    //     if(position%150===0){
    //         sleep(1000)
    //         console.log('sleep')
    //     }
    //     position+=5;

    //     if(position===650){
    //         move(slider, -650);
    //         position=-650;
    //     }
    // }, 5)