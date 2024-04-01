var secondHand = document.querySelector('.hand__second');
var minuteHand = document.querySelector('.hand__minute');
var hourHand = document.querySelector('.hand__hour');

refreshHand();
setInterval(refreshHand, 1000);

function refreshHand() {
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();

   hour = hour%12;
   hour = (hour*30)+(minute/2)+(second/120)-90;   
   minute = (minute*6)+(second/10)-90;
   second = (second*6)-90;
   secondHand.style.transform = 'rotate(' + second + 'deg)';
   minuteHand.style.transform = 'rotate(' + minute + 'deg)';
   hourHand.style.transform = 'rotate(' + hour + 'deg)';
}