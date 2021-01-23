document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("heythere").style.visibility = "hidden";
    setTimeout(TypeWriter, 1000);
});

function TypeWriter(){
    var dataText = ["Hey there! My name is"];
    const timeBetweenChars = 150;
    const timeToRestart = 20000;
    
    // text: the text to put into the string
    // i: the character iterator
    function typeWriter(text, i, fnCallback){
        if(i < text.length){
            document.getElementById("heythere").innerHTML =
            text.substring(0, i+1) + '<span class="cursor" aria-hidden = "true"></span>';

            // wait for 100ms then call this function again for the next char
            setTimeout(function() {
                typeWriter(text, i+1, fnCallback)
            }, timeBetweenChars);
        }
        // text is finished, call the callback if there is one
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i){
        // if we reached the end of our text, then wait 20 sec and start again
        if(typeof dataText[i] == 'undefined')
        {
            setTimeout(function(){
                StartTextAnimation(0);
            }, timeToRestart);
        }

        // check if dataText[i] exists
        if(i < (dataText.length)){
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    document.getElementById("heythere").style.visibility = "visible";
    // start the text animation
    StartTextAnimation(0);
}