const secondHand = document.getElementById("secHand");
const minuteHand = document.getElementById("minHand");
const hourHand = document.getElementById("hourHand");

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    console.log(hour+" "+minute+" "+second);

    // hourHand.style.rotate = "180deg";

    hourHand.style.rotate = `${15*hour}deg`;                                                             //"(((360/12)+(360/12)/60)*hour)";
    minuteHand.style.rotate = `${6*minute}deg`;                                                                      //((360/60)*minute);
    secondHand.style.rotate = `${6*second}deg`;                                                                   //((360/60)*second);

    // console.log(((360/12)+(360/12)/60)*hour);
    // console.log((360/60)*minute);
    // console.log(`${0.5*second}deg`);

    

},1000);

