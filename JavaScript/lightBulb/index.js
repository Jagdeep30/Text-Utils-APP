const btn = document.getElementById("toggle");
const bulb = document.getElementById("bulb");
btn.addEventListener("click",function(){
    if(bulb.getAttribute("class")=="on"){
        bulb.setAttribute("class","off");
        btn.innerHTML = "On";
        btn.setAttribute("class","btnon");
    }
    else{
        bulb.setAttribute("class","on");
        btn.innerHTML = "Off";
        btn.setAttribute("class","btnoff");
    }
})