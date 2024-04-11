document.getElementById("delete-type").addEventListener("keyup", function (event) {

    let deleteText = event.target.value;
    let removeDltAttribute = document.getElementById("delete-btn");
    if (deleteText === "delete") {
        removeDltAttribute.removeAttribute('disabled');
    }
    else {
        removeDltAttribute.setAttribute('disabled', true);
    }
});

document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById("delete-text").style.display = "none";
})