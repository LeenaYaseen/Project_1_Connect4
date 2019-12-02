
let player1 = 0;
let player2 = 0;


let i = 0;
let j = 0;
let k = 0;
let l = 0;

$(document).ready(function()
{
//created hover function to indicate the column
    $("[class*= column-]").hover(function()
    {
      $(this).css("background-color" , "cyan");
    },function()
    {
        $(this).css("background-color","darkblue")
    })

function changePlayer()
{
  

    
}

// how to start game
function game()
    {
   
        //player1 game play
            
            $(".column-1").click(function()
            {
                if(player1 == 0 && player2 == 0)
                {
                $('#'+i+'1').css('background-color','yellow')
                {
                    i++;
                   
                }
                player1 = 1;
                player2 = 1;
                }
            
        
            })
           
            $(".column-2").click(function()
            {
                $('#'+j+'2').css('background-color','yellow')
                {
                    j++;
                   
                    
                }
        
            })
           
            
            $(".column-3").click(function()
            {
                $('#'+k+'3').css('background-color','yellow')
                {
                    k++;
                    
                    
                }
        
            })
      
        
            $(".column-4").click(function()
            {
                $('#'+l+'4').css('background-color','yellow')
                {
                    l++;
                   
                    
                }
        
            })
         
           
        
    

        //player 2
            
             $(".column-1").click(function()
            {
                $('#'+i+'1').css('background-color','red')
                 {
                     i++;
                    
                     
                 }

            })
         

            $(".column-2").click(function()
            {
                $('#'+j+'2').css('background-color','red')
                 {
                      j++;
                      
                      
                 }

            })
      

            $(".column-3").click(function()
            {
                $('#'+k+'3').css('background-color','red')
                {
                     k++;
                     
                     
                }

            })
     

            $(".column-4").click(function()
            {
                 $('#'+l+'4').css('background-color','red')
                {
                    l++;
                    
                   
                }

            })
    }
    
game()



})
