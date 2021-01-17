function notify(params) {
    let notifyDiv = document.getElementById("notification");
    notifyDiv.innerText = params;
    notifyDiv.style.display = "block";

    setInterval(function() {
        notifyDiv.style.display = "none";
    }, 3000);
}