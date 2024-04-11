let commentID = document.getElementById('comment');
commentID.innerText = "text set by js";




function setComment() {
    let getText = document.getElementById("getText");
    let gotText = getText.value;
    let p = document.createElement('p');
    p.innerText = gotText;
    document.body.appendChild(p);
    gotText.value = ' ';
}


// next code is good

document.getElementById("submitButton").addEventListener("click", function(){
    let getComment = document.getElementById("commentBox");
    let gotComment = getComment.value;

    let createdElement = document.createElement('p');
    createdElement.innerText = gotComment;

    let commentContainer = document.getElementById("comment-container");

    commentContainer.appendChild(createdElement)

    getComment.value = '';
})









