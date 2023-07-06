


setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.getElementById("clock").innerHTML = `${hour}:${minute}:${second}`;
    console.log(`${hour}:${minute}:${second}`);
},1000);