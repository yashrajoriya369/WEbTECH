function onHand() {
    document.getElementById("text").innerText = "Changed"
}
function onRed() {
    document.getElementById("color").style.color = "Red"
}
function onHide() {
    document.getElementById("element").style.display = "None"
}
function onImg() {
    document.getElementById("img").src = "./7.webp"
}

function byClassOnHand() {
    const element = document.getElementsByClassName("text");
    for(i = 0; i < element.length; i++) {
        element[i].innerText = "Yash"
    }
}
function byClassOnBack() {
    const element = document.getElementsByClassName("back");
    for(i = 0; i < element.length; i++) {
        element[i].style.color = "Red"
    }
}
byClassOnBack