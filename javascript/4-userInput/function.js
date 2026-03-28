var username;

// this is the button functions
document.getElementById("userButton").onclick = function(){
    
    // username variable storex the value for input text.
    username = document.getElementById("userText").value;

    // it will print your text once the variable store on his own value.
    document.getElementById("headText").textContent = `you're a gay, ${username}`
}