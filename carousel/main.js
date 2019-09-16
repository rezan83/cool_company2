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

