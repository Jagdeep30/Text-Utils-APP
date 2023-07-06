let btn = document.getElementById("addBook");
let bookLS = document.getElementById("bookMk");

let bookmarks = [];

let addBookmark = ()=>{
    // let link = window.location.href;
    // let hsName = window.location.hostname;
    // let li = document.createElement("li");
    // // li.innerHTML =`<a></a>`;
    // li.innerHTML = `<a href="${link}">${hsName}</a>`;
    // console.log(`<a href="${link}>${hsName}</a>"`);
    // bookLS.appendChild(li);

    let link = prompt("Enter the link of your bookmark website");
    let hsName = prompt("Enter the name of your bookmark website");
    let li = document.createElement("li");
    // li.innerHTML =`<a></a>`;
    li.innerHTML = `<a href="${link}">${hsName}</a>`;
    console.log(`<a href="${link}>${hsName}</a>"`);
    bookLS.appendChild(li);



}

btn.addEventListener('click',addBookmark);