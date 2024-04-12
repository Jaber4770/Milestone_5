document.getElementById("list-container").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);

})



document.getElementById("add-item").addEventListener("click", function () {

    let ul = document.getElementById('list-container');
    let li = document.createElement("li");
    li.innerText = "New Item";
    ul.appendChild(li);
})
