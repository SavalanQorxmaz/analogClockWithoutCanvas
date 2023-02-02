


const hour = document.getElementById("hour");
const second = document.getElementById("second")
// const 


function analogC(){


    const date = new Date();
  

    let hours = date.getHours();
    if(hours >11){
        hours -= 12;
    }
    let hourPosition = 360 / 30 * hours;

    let seconds = date.getSeconds();
    let secondPosition = 360 / 60 * seconds;

    console.log(hours)



    hour.style.transform = `rotateZ(${hourPosition}deg)`
    second.style.transform = `rotateZ(${secondPosition}deg)`


requestAnimationFrame(analogC)

}

requestAnimationFrame(analogC)