// Created a hover function to change background color into yellow when hover over.
$(document).ready(function()
{

    $(".box").hover(function()
    {
      $(this).css("background-color" , "yellow");
    },function()
    {
        $(this).css("background-color","white").last()
    
    });
// Created a click function to able the user click the area.

    $('#column-1').on('click', function () {
        
        $(this).off("mouseleave");
        $('#column-1 > .box').last().addClass("yellow")
        
    });
 
  
});