//rotate my diamond

$('#hours').click(function(){
    $('#hours').css('transform', 'rotate(30deg)')
})



setInterval(function(){
    
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

} 


setInterval(function(){
    
    var hours = date.GetHours() * (hours*30);
    $('#hours').css('transform-origin', getHours);

},1000)


