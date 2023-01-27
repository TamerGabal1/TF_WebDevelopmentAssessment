let topButton = document.getElementById('topButton');

topButton.onclick = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}