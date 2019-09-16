var navShow = document.getElementById('nav-show');
var navShowUp = document.getElementById('nav-show-up');
var navShowDown = document.getElementById('nav-show-down');
var hiddenNav = document.querySelectorAll('.nav-hide');

// default icone value
navShowDown.style.display = 'block';
navShowUp.style.display = 'none';

// event listeners
navShowDown.addEventListener('click', ()=> toggleNave());
navShowUp.addEventListener('click', ()=> toggleNave());

window.addEventListener('resize', () => showOrHideNav());

// implrmented fnctions:

// toggle the dispaly for an item
var toggleDisplay = (item) => {
   var newState =  (item.style.display === 'block'? 'none': 'block');
   item.style.display = newState;
}

// toggle nav elements based on widow size
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
        console.log(item)
        toggleDisplay(item)
    })
}
