const clock = document.getElementById('clock')

setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleDateString())  show only date
    // console.log(date.toLocaleString())   show time and date
    let out = console.log(date.toLocaleTimeString())  //show time only
     clock.textContent=date.toLocaleTimeString();
}, 1000); 