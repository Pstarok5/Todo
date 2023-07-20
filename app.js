let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");


btn.addEventListener("click", () => {

    let inputValue = input.value;
    console.log(inputValue);

    let listItem = document.createElement("li");
    listItem.innerHTML = inputValue;
    list.appendChild(listItem);

});