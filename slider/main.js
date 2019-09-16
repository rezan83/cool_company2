var slider = document.getElementById('slider');

var move = (item, distance) => {
    item.style.left = `${distance}px`;
}

var sleep = (miliseconds) => {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

var distance = -650;
var i = 0;

setInterval(()=> {
    move(slider, distance);
    console.log(distance)
    if(distance%150===0){
        sleep(1000)
        console.log('sleep')
    }
    distance+=5;

    if(distance===650){
        move(slider, -650);
        distance=-650;
    }
}, 5)


// var distance = -650;
// var i = 0;

// setInterval(()=> {
//     move(slider, distance);
//     console.log(distance)
//     distance+=150;
//     i++;

//     if(i>=10){
//         move(slider, -650);
//         distance=-650;
//         i=0;
//     }

// }, 1000)

// var moveIt = () => {
//     move(slider, distance);
    
//     if(distance%150===0){
//         clearInterval(intervalMove);
//         console.log(distance)
//     }
//     distance+=5;
//     if(distance===650){
//         move(slider, -650);
//         distance=-650;
//     }
// }
// var intervalMove = setInterval(moveIt, 5)



// for (let i = 0; i < 9; i++) {
   
//     var intervalMove = () => {setInterval(moveIt, 5)}
//     intervalMove()
//     console.log(i)

// }

