

const frame = document.getElementById("frame")
const hour = document.getElementById("hour");
const minute = document.getElementById("minute")
const second = document.getElementById("second")
// const 

let deg = 0;
for(let i=0;i<30;i++){


    
    let line = document.createElement("div");
    line.classList.add("line")
 
    line.style.transform = `rotateZ(${deg}deg)`;
    
frame.appendChild(line)

  for(let j=0;j<2;j++){
    let lineChild = document.createElement("div");
    if(i%5 == 0){
         lineChild.classList.add("long-line");
         
     }else{
         lineChild.classList.add("short-line")
     }
 line.appendChild(lineChild)
  }
    deg +=6
}




function analogC(){


    const date = new Date();
    let milliSeconds = date.getMilliseconds();
    // console.log(milliSeconds)
  
    let seconds = date.getSeconds();
    let secondPosition = 360 / 60 * seconds + 360 /60000 *milliSeconds;

    let minutes = date.getMinutes();
    let minutePosition = 360 / 60 * minutes + seconds / 10;

    let hours = date.getHours();
    if(hours >11){
        hours -= 12;
    }
    let hourPosition = 360 / 12 * hours + minutes / 12 * 6;




    hour.style.transform = `rotateZ(${hourPosition}deg)`
    minute.style.transform = `rotateZ(${minutePosition}deg)`
    second.style.transform = `rotateZ(${secondPosition}deg)`










requestAnimationFrame(analogC)

}

requestAnimationFrame(analogC)