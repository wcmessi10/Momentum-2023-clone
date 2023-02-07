const clock = document.querySelector("h2#clock");
clock.innerText ="lalalalla";

function sayClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
// date객체를 가져와 시,분, 초를 가져오고 String화 해서 padStart로 0 -> 00화 하여 출력
sayClock();
setInterval(sayClock,1000);//정해진 시간 간격으로 메소드 실행