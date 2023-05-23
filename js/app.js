setInterval(function(){
    let date = new Date();
    const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // document.querySelector('div').style.width = (100 * date.getSeconds())/60 + '%';
    document.querySelector('.hour').innerText = date.getHours();
    document.querySelector('.minit').innerText = date.getMinutes();
    document.querySelector('.second').innerText = date.getSeconds();
    document.querySelector(".day").innerText = weekday[date.getDay()];
    document.querySelector(".month").innerText = date.getMonth() ;
    document.querySelector(".date").innerText = date.getDate();
    // document.querySelector('.day').innerText = weekday[date.get(day)];


},1000)

// setInterval(function(){
//     const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];

//     const d = new Date();
//     let day = weekday[d.getDay()];
//     document.querySelector(".day").innerText = day;
// })