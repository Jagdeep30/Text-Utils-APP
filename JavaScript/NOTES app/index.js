let countEle = 0;
// let allNtCnt = 0;
// let starNtCnt = 0;
let edit = false;
let val = "";
let index;
let divC;

// selecting elements from html
const add = document.getElementById("add");
const del = document.getElementById("delete");
const allnotes = document.getElementById("allNotes");
const starnotes = document.getElementById("starNotes");
const container = document.getElementById("container");


// functions


// function to add a note
const addNote = ()=>{

    // const divC = document.createElement("div");
    divC = document.createElement("div");
    divC.setAttribute("class","note");
    countEle++;
    divC.setAttribute("id",`note${countEle}`);
    
    // const starBtn = 
    // const starBtn = document.createElement("img");
    // starBtn.setAttribute("src","./icons/star.svg");
    // starBtn.setAttribute("alt","Pin Note");
    // starBtn.addEventListener("click",star);

    // starBtn.addEventListener('click',()=>alert("working..."));
    const starBtn = document.createElementNS("http://www.w3.org/2000/svg","svg");
    starBtn.setAttribute("xmlns","http://www.w3.org/2000/svg");
    starBtn.setAttribute("width","24");
    starBtn.setAttribute("height","24");
    starBtn.setAttribute("viewbox","0 0 24 24");
    starBtn.innerHTML = '<path fill="rgba(0,0,0,0)" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path>';
    starBtn.addEventListener("click",star);



    // const title = document.createElement("textarea");
    // title.setAttribute("name","title");
    // title.setAttribute("id","title");
    // title.setAttribute("cols","30");
    // title.setAttribute("rows","1");


    // const noteData = document.createElement("textarea");
    // noteData.setAttribute("name","singlenote");
    // noteData.setAttribute("id","singleNote");
    // noteData.setAttribute("cols","30");
    // noteData.setAttribute("rows","10");


    


    // const mark = document.createElement("img");
    // mark.setAttribute("id","mark");
    // mark.setAttribute("src","./icons/tick.png");
    // mark.setAttribute("alt","Mark as Complete");
    // mark.addEventListener("click",complete);



   
    const data = document.createElement("form");
    data.setAttribute("action","javascript:");
    data.setAttribute("onsubmit","complete(this)");
    // data.setAttribute("onfocus","(this)=>{this.lastChild.style.display = 'inline-block';}");
    // data.onfocus = (this)=>{this.lastChild.style.display = 'inline-block';};
    data.innerHTML = "<textarea id='title' cols=30 rows=1 required></textarea>";
    data.innerHTML += "<textarea id='singleNote' cols=30 rows=10></textarea>";
    data.innerHTML += "<input type = 'image' id = 'mark' src='./icons/tick.png'>";


    // data.lastChild.addEventListener("click",complete);
    // data.lastChild.style.borderRadius = "";
    data.addEventListener("focusin",(event)=>{
        
        if(event.target.id=="singleNote" && event.target.value.length!=0){
            edit = true;
            val = event.target.value;
            index = event.target.parentElement.firstChild.value;
            index = localStorage.getItem(index);
            // //console.log(index);
            index = JSON.parse(index);
            index = index.indexOf(val);
        }

        //console.log(event.target);
        event.target.parentElement.lastChild.style.display = "inline-block";
    })
    


    


    divC.appendChild(starBtn);
    divC.appendChild(data);
    // divC.appendChild(mark);
    // divC.appendChild(title);
    // divC.appendChild(noteData);
    // divC.appendChild(date);
    // divC.appendChild(mark);


    allnotes.appendChild(divC);
    data.querySelector("#title").focus();


}



//function to delete a note
const delNote = ()=>{
    const arr = Array.from(allnotes.childNodes);
    
    

    if(!container.getElementsByTagName("button")[2]){ // this is to prevent from adding multiple check boxes and confirm buttons but we can also disable the delete button to prevent this problem

        //adding checkboxes
        for(let ele of arr){
            let check = document.createElement("input");
            check.setAttribute('type','checkbox');
            check.setAttribute('name','delNote');
            check.setAttribute('id',`${ele.id}`);
    
            ele.prepend(check);

            //disable the star buttons 
            ele.getElementsByTagName("svg")[0].style.pointerEvents = "none";
        }



        const selection = document.createElement("div");
        selection.setAttribute("id","confirmBtns");


        // INSTEAD OF ADDING THESE TWO BUTTONS WHENEVER DELETE IS CLICKED WE CAN ADD THEM ONE TIME IN HTML AND CAN SET THEIR DISPLAY AS NONE AND WHEN WE CLICK THE DELETE BUTTON WE CAN DISPLAY THEM

        //CONFIRM BUTTON
        const confirm = document.createElement("button");
        confirm.setAttribute("id","confirmDel");
        confirm.innerHTML = "Confirm";
        confirm.addEventListener("click",confirmDel);

        //CANCEL BUTTON
        const cancel = document.createElement("button");
        cancel.setAttribute("id","cancelDel");
        cancel.innerHTML = "Cancel";
        cancel.addEventListener("click",cancelDel);

        selection.appendChild(confirm);
        selection.appendChild(cancel);

        container.appendChild(selection);


        // this is to set the add button and all the starred notes to disabled so that nothing could be interacted while deleting a note
        add.setAttribute("disabled","true");
        starnotes.style.pointerEvents = "none";
    }

}




// function to mark a note as starred or pinned(we can say)
const star = (event)=>{
    // //console.log(event.parentElement);
    event.target.classList.toggle("marked-yellow");

    if(event.target.parentElement.parentElement.parentElement==starnotes){
        allnotes.prepend(event.target.parentElement.parentElement);
        let key = event.target.parentElement.parentElement.querySelector("#title").value;
        let value = event.target.parentElement.parentElement.querySelector("#singleNote").value;
        // //console.log(key,value);

        localStorage.removeItem("star--"+key);

        if(localStorage.hasOwnProperty(key)){
            // localStorage.getItem(title).push(noteinfo);
            let arr = localStorage.getItem(key);
            //console.log(typeof arr+" -> "+arr);
            arr = JSON.parse(arr);
            if(edit){
                arr[index] = noteinfo;
                edit=false;
            }
            else{
                arr.push(value);
            }
            arr = JSON.stringify(arr);
            localStorage.setItem(key,arr);
        }
        else{
            let arr = [value];
            arr = JSON.stringify(arr);
            localStorage.setItem(title,arr);
        }
        // localStorage.setItem("star--"+key,value);
    }
    else{
        let child = event.target.parentElement.parentElement;
        starnotes.appendChild(child);

        let key = event.target.parentElement.parentElement.querySelector("#title").value;
        let value = event.target.parentElement.parentElement.querySelector("#singleNote").value;
        //console.log(key,value);


        let indexx = event.target.parentElement.parentElement.childNodes[1].firstChild.value;
        indexx = localStorage.getItem(indexx);
            // //console.log(index);
        indexx = JSON.parse(indexx);
        
        indexx = indexx.indexOf(value);


        let newVal = localStorage.getItem(key);
        newVal = JSON.parse(newVal);
        // console.log("before->"+typeof newVal);
        newVal.splice(indexx,1);
        // console.log("after-> "+typeof newVal);
        newVal = JSON.stringify(newVal);
        localStorage.setItem(key,newVal);
        
        if(!localStorage.hasOwnProperty("star--"+key)){
            localStorage.setItem("star--"+key,`["${value}"]`); //change this 
        }
        else{
            let arr = localStorage.getItem("star--"+key);
            arr = JSON.parse(arr);
            arr.push(value);
            localStorage.setItem("star--"+key,JSON.stringify(arr));
        }
        // use key and array combination instead of taking string and if there are multiple notes with same title then we could add the value of the note in the same array
    }

}



//function to confirm deletion
const confirmDel = (event)=>{

    //remove the selected notes
    let arr = Array.from(allnotes.querySelectorAll("input[name=delNote]:checked"));
    arr.forEach((ele)=>{
        allnotes.removeChild(ele.parentElement);
    })

    
    //remove checkbox
    arr = Array.from(allnotes.querySelectorAll("input[name=delNote]"));
    arr.forEach((ele)=>{
        //enable the star buttons before removing
        ele.nextSibling.style.pointerEvents = "auto";
        ele.parentElement.removeChild(ele);
    })


    //enable add button
    add.removeAttribute("disabled");


    //enable starred notes
    starnotes.style.pointerEvents = "auto";


    //remove confirm cancel buttons
    container.removeChild(event.target.parentElement);

    
    // //enable the star buttons in allnotes section
    // //console.log(arr[0].parentElement);
}


//function to cancel deletion
const cancelDel = ()=>{
    //remove checkbox
    arr = Array.from(allnotes.querySelectorAll("input[name=delNote]"));
    arr.forEach((ele)=>{
        ele.parentElement.removeChild(ele);
    })


    //enable add button
    add.removeAttribute("disabled");

    //remove confirm cancel buttons
    container.removeChild(event.target.parentElement);
}


//function to mark note as complete and store it in local storage
const complete = (event)=>{
    //store note in local storage
    // //console.log(event.firstChild.value);
    // //console.log(event.childNodes[1].value);
    //console.log(event.childNodes[0].value);
    // localStorage.setItem(allNtCnt++,{"title":event.childNodes[0].value,"value":event.childNodes[1].value});
    let title = event.childNodes[0].value;
    let noteinfo = event.childNodes[1].value;
    if(localStorage.hasOwnProperty(title)){
        // localStorage.getItem(title).push(noteinfo);
        let arr = localStorage.getItem(title);
        arr = JSON.parse(arr);
        if(edit){
            arr[index] = noteinfo;
            edit=false;
        }
        else{
            arr.push(noteinfo);
        }
        arr = JSON.stringify(arr);
        localStorage.setItem(title,arr);
    }
    else{
        let arr = [noteinfo];
        arr = JSON.stringify(arr);
        localStorage.setItem(title,arr);
    }
    
    //remove the tick button
    // event.removeChild(event.lastChild);
    event.lastChild.style.display = "none";

    //a div to show date on which note was added
    const date = document.createElement("span");
    date.setAttribute("id","date");
    let dt = new Date();
    dt = dt.toDateString().slice(4);
    date.innerHTML = dt;

    event.parentElement.appendChild(date);
    

    
}

// Event listeners

add.addEventListener('click',addNote);
del.addEventListener('click',delNote);


document.body.onload = ()=>{
    let arr = Object.entries(localStorage);
    arr.forEach((ele)=>{
        if(ele[0].startsWith("star--")){
            //console.log(ele);
            ele[0] = ele[0].slice(6);

            addNote();
            divC.childNodes[1].querySelector("#title").value = ele[0];
            divC.childNodes[1].querySelector("#singleNote").value = ele[1];
            divC.querySelector("#mark").style.display = "none";
            // console.log(divC.firstChild.firstChild);
            star({target:divC.firstChild.firstChild});
        }
        else{
            //console.log("simple");
            // addNote();
            // divC.childNodes[1].querySelector("#title").value = ele[0];
            // divC.childNodes[1].querySelector("#singleNote").value = ele[1];
            let temp = ele[1];
            temp = JSON.parse(temp);
            //console.log(temp);
            for(let i=0;i<temp.length;i++){
                addNote();
                divC.childNodes[1].querySelector("#title").value = ele[0];
                divC.childNodes[1].querySelector("#singleNote").value = temp[i];
                divC.querySelector("#mark").style.display = "none";
            }
        }
    })
}












// we can also add a pop up window if possible to get the data of notes from user and can also show the title for note