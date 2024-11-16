var modal = document.getElementById("modal");
var img = document.getElementById("profilbild");
var modalImg = document.getElementById("imgFull");
var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "flex"; 
    modalImg.src = this.src;
}

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

