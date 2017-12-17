var random;
var sentence;
var goodQuotes = [
  "The best preparation for tomorrow is doing your best today.  H. Jackson Brown, Jr.",
"An investment in knowledge pays the best interest. Benjamin Franklin",
"The best way to pay for a lovely moment is to enjoy it.  Richard Bach",
" When we seek to discover the best in others, we somehow bring out the best in ourselves.  William Arthur Ward",
" I am as bad as the worst, but, thank God, I am as good as the best. Walt Whitman ",
" Work hard, stay positive, and get up early. It's the best part of the day.  George Allen, Sr. ",
"The best way to predict the future is to create it. Peter Drucker ", 
"The best way to cheer yourself up is to try to cheer somebody else up.  Mark Twain", 
"The best advice I ever got was that knowledge is power and to keep reading. David Bailey ",
 "You have power over your mind - not outside events. Realize this and you will find strength. Marcus Aurelius " ]; 



//sentence = goodQuotes[random];
  
document.getElementById("myButton").onclick = function(){
  
  random = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  sentence = goodQuotes[random];
    
 document.getElementById("quoteDisplay").innerHTML = sentence;
 
}  
 document.getElementById("tweetButton").onclick = function () {
   
window.open("https://twitter.com/intent/tweet?text=" +  document.getElementById("quoteDisplay").innerHTML);
   
};

