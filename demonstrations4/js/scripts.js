//rotate my diamond

$('#diamond').click(function(){
    $('#diamond').css('transform', 'rotate(0deg)')
})


//randomly position left to right  


setInterval(function(){
    
    var randomNumber = Math.random() * 50 + "px";
    $('#square').css('margin-left', randomNumber);

},1000)



//randomly position left to right  

setInterval(function(){
    
    var randomNumber = Math.random() * 390 + "px";
    $('#circle3').css('margin-left', randomNumber);

},1000)
