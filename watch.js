let sec = 0;
let min = 0;
let hr = 0;
const secId = document.getElementById('sec');
const minId = document.getElementById('minutes');

const start=()=>{
    const seconds =()=>{
      var timeID =   setInterval(() => {
            sec ++ ;
            secId.innerText=sec;
            if(sec == 59){
                secId.innerText=00;
                sec = 0;
            }
        }, 1000);
        stop=()=>{
            clearInterval(timeID);
        }
    }
    const minutes =()=>{
        setInterval(() => {
            min++;
                minId.innerText=min;
            if(min == 59){
                minId.innerText=00;
                min = 0;
            }
        }, 60000);
    }
    const hours =()=>{
        setInterval(() => {
            hr++;
                hrId.innerText=hr;
            if(hr == 59){
                hrId.innerText=00;
                hr = 0;
            }
        }, 3600000);
    }
    seconds();
    minutes();
    hours();
    
}
// console.log(counts);
