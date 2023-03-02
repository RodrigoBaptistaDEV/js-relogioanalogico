let digitalElement = document.querySelector('.digital');
let sEleement= document.querySelector('.p_s');
let mEleement= document.querySelector('.p_m');
let hEleement= document.querySelector('.p_h');

let updateClock =()=>{
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg= ((360/60)*second)-90;
    let mDeg= ((360/60)*minute)-90;
    let hDeg= ((360/12)*hour)-90;

    sEleement.style.transform = `rotate(${sDeg}deg)`;
    mEleement.style.transform = `rotate(${mDeg}deg)`;
    hEleement.style.transform = `rotate(${hDeg}deg)`;

}
let fixZero=(time)=>{
    return time < 10 ? `0${time}`:time;
}
setInterval(updateClock,1000);
updateClock();
