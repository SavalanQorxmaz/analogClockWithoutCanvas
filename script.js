

const analog = document.getElementById("analog");
const digital = document.getElementById("digital");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute")
const second = document.getElementById("second")
// const 

let deg = 0;
for(let i=0;i<30;i++){


    
    let line = document.createElement("div");
    line.classList.add("line")
 
    line.style.transform = `rotateZ(${deg}deg)`;
    
analog.appendChild(line)

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
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthDay = date.getDate();
    let weekDay = date.getDay();

    // analog clock
    let secondPosition = 360 / 60 * seconds + 360 /60000 *milliSeconds;
    let minutePosition = 360 / 60 * minutes + seconds / 10;
    let analogHours = hours;
    if(hours >11){
        analogHours -= 12;
    }
    let hourPosition = 360 / 12 * analogHours + minutes / 12 * 6;

    hour.style.transform = `rotateZ(${hourPosition}deg)`
    minute.style.transform = `rotateZ(${minutePosition}deg)`
    second.style.transform = `rotateZ(${secondPosition}deg)`

// digital clock

let digitalHours = `${hours}`;
let digitalMinutes = `${minutes}`;
let digitalSeconds = `${seconds}`;
if(hours<10){
    digitalHours = `0${hours}`
}
if(minutes <10){
    digitalMinutes = `0${minutes}`;
}
if(seconds < 10){
    digitalSeconds = `0${seconds}`;
}

digital.children[0].innerHTML = `${digitalHours} : ${digitalMinutes} : ${digitalSeconds}`;

let weekDayString = '';
switch(weekDay){
    case 0: weekDayString = `Bazar`;
    break;
    case 1: weekDayString = `Bazar  ertəsi`;
    break;
    case 2: weekDayString = `Çərşənbə axşamı`;
    break;
    case 3: weekDayString = `Çərşənbə`;
    break;
    case 4: weekDayString = `Cümə axşamı`;
    break;
    case 5: weekDayString = `Cümə`;
    break;
    case 6: weekDayString = `Şənbə`;
    break;
    default: weekDayString = ``;
}

let monthString = '';

switch(month){
    case 0: monthString = 'Yanvar';
    break;
    case 1: monthString = 'Fevral';
    break;
    case 2: monthString = 'Mart';
    break;
    case 3: monthString = 'Aprel';
    break;
    case 4: monthString = 'May';
    break;
    case 5: monthString = 'İyun';
    break;
    case 6: monthString = 'İyul';
    break;
    case 7: monthString = 'Avqust';
    break;
    case 8: monthString = 'Sentyabr';
    break;
    case 9: monthString = 'Oktyabr';
    break;
    case 10: monthString = 'Noyabr';
    break;
    case 11: monthString = 'Dekabr';
    break;
   
    default: monthString = '';
}


digital.children[1].innerHTML = ` ${monthDay} ${monthString} ${year} - ${weekDayString}`




requestAnimationFrame(analogC)

}

requestAnimationFrame(analogC)