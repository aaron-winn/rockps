
var playButton = null;
function app() {
    // listen for click on play button
    // this function lets us get an html element in javascript by its id
    playButton = document.getElementById('playButton');
    // playButton variable here is an HtmlButton object that represents the button
    // on the page. It has functions attached to it just stuff in ruby does.
    // the addEventListener function takes
    playButton.addEventListener('click', play);
}

var playing = false;
function play() {
    if (playing) {
        return;
    }
    playing = true;
    // call this when they clicked play
    // unhide the 3 buttons
    
    // add event listeners for the three buttons here.
    rockBtn= document.getElementById('rockBtn');
    papperBtn = document.getElementById('papperBtn');
    scissorsBtn = document.getElementById('scissorsBtn');
    
    // you will want to add an event listener here to each button and 
    rockBtn.addEventListener('click', play);
    papperBtn.addEventListener('click', play);
    scissorsBtn.addEventListener('click', play);
    // do your game logic there
    
    if
    
    /** 
     * in ruby you would just say
     * userchoice = gets.chomp or whatever
     * in javascript that doesn't work because your app is also showing
     * a web page to a user, they need to be able to click around and
     * stuff. If we just asked for input and waited like that then
     * our program would not allow the user to do anything else like click
     * buttons ectc
     * 
     * so the solution is we use an event strategy where we define some functions
     * and tell the app to run them when something happens. We don't manually call
     * them ourselves
     * 
     * I will make an example above for the play button
     * 
     */

     userChoice = c
    // when they click on any of the buttons you should probably 
}

// this will run the app
app();