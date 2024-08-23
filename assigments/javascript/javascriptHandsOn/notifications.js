let toggle = true;

function startNotification(text){
    document.title = text;
    document.querySelector('link[rel="icon"]').href = 'icon.png'
}


function endNotification(){
    document.title = 'Homepage';
    document.querySelector('link[rel="icon"]').href = 'default.jpg'
    
}


setInterval(() => {
    if (toggle) {
        startNotification('New Notification');
    } else {
        endNotification();
    }
    toggle = !toggle; // Toggle the flag
}, 1000);