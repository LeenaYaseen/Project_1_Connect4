
let player = 0;
let i = 0;
let j = 0;
let k = 0;
let l = 0;
var columnID;

let count = 0;



$(document).ready(function()
{
    Swal.fire("Welcome to Connect4. Let's play ")
    
    $("#p2").css("animation","stop")
    $("#p1").css("animation","blinkplayer1 2s infinite")
    
//created hover function to indicate the column
    $("[class*= column-]").hover(function() 
   

    {
      $(this).css("background-color" , "darkcyan") 
    },function()
    {
        $(this).css("background-color","darkblue")
    })



    $("[class*=column-]").click(function()
    {
        columnID = $(this).attr('id')
        game()
        resetBoard()
        horizontalCheckPlayer()
        verticalCheckPlayer()
        diagonalCheckPlayer()
        if(count == 16)
        {
            Swal.fire(
                'Good work',
                'It is a tie.'
                
              )
        }
        //console.log(count) // Check the count
        
        //console.log(columnID) // Check which column
    })
   
    

// Game start
function game()
{
    //Player 1 gameplay and choosing its columns
    if(player == 0)
    {   
       
        $("#p1").css("animation","stop") // stop yellow
        $("#p2").css("animation","blinkplayer2 2s infinite") // start red
        
        
        if(columnID == 0)
        {
            $('#'+i+'1').css('background-color','yellow').addClass('yellow')
            {
                i++;
                count++;

                
            }
            
        }
        if(columnID == 1)
        {
            $('#'+j+'2').css('background-color','yellow').addClass('yellow')
            {
                j++;
                count++;
                
            }
            
        }
        if(columnID == 2)
        {
            $('#'+k+'3').css('background-color','yellow').addClass('yellow')
            {
                k++;
                count++;
            }
            
        }
        if(columnID == 3)
        {
            $('#'+l+'4').css('background-color','yellow').addClass('yellow')
            {
                l++;
                count++;
            }
            
        }
        
        player++;
    
    }
    //Player 2 gameplay and choosing its columns
    else if(player == 1)
    {
        $("#p2").css("animation","stop") // stop red
        $("#p1").css("animation","blinkplayer1 2s infinite") // start yellow
        
    
        if(columnID == 0)
        {
            $('#'+i+'1').css('background-color','red').addClass('red')
            {
                i++;
                count++;
            }
            
        }
        if(columnID == 1)
        {
            $('#'+j+'2').css('background-color','red').addClass('red')
            {
                j++;
                count++;
            }
            
        }
        if(columnID == 2)
        {
            $('#'+k+'3').css('background-color','red').addClass('red')
            {
                k++;
                count++;
            }
            
        }
        if(columnID == 3)
        {
            $('#'+l+'4').css('background-color','red').addClass('red')
            {
                l++;
                count++;
            }
            
        }
        player --;
       
    }

}


function horizontalCheckPlayer()
{

    // Possible ways to win for horizontal .. 
    // Check for player1
    if($("#01").hasClass('yellow') && $("#02").hasClass('yellow') && $("#03").hasClass('yellow') && $("#04").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#11").hasClass('yellow') && $("#12").hasClass('yellow') && $("#13").hasClass('yellow') && $("#14").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#21").hasClass('yellow') && $("#22").hasClass('yellow') && $("#23").hasClass('yellow') && $("#24").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#31").hasClass('yellow') && $("#32").hasClass('yellow') && $("#33").hasClass('yellow') && $("#34").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }

    //Check for player2
    if($("#01").hasClass('red') && $("#02").hasClass('red') && $("#03").hasClass('red') && $("#04").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#11").hasClass('red') && $("#12").hasClass('red') && $("#13").hasClass('red') && $("#14").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#21").hasClass('red') && $("#22").hasClass('red') && $("#23").hasClass('red') && $("#24").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#31").hasClass('red') && $("#32").hasClass('red') && $("#33").hasClass('red') && $("#34").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
   
   
    
}
function verticalCheckPlayer()
{

    // Possible ways to win for vertical .. 
    //Check for player1
    if($("#01").hasClass('yellow') && $("#11").hasClass('yellow') && $("#21").hasClass('yellow') && $("#31").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#02").hasClass('yellow') && $("#12").hasClass('yellow') && $("#22").hasClass('yellow') && $("#32").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#03").hasClass('yellow') && $("#13").hasClass('yellow') && $("#23").hasClass('yellow') && $("#33").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#04").hasClass('yellow') && $("#14").hasClass('yellow') && $("#24").hasClass('yellow') && $("#34").hasClass('yellow'))
    {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }

    //Check for player2
    if($("#01").hasClass('red') && $("#11").hasClass('red') && $("#21").hasClass('red') && $("#31").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#02").hasClass('red') && $("#12").hasClass('red') && $("#22").hasClass('red') && $("#32").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#03").hasClass('red') && $("#13").hasClass('red') && $("#23").hasClass('red') && $("#33").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
    if($("#04").hasClass('red') && $("#14").hasClass('red') && $("#24").hasClass('red') && $("#34").hasClass('red'))
    {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
        $("[class*=column-").off('click');

    }
  

   
    
}
function diagonalCheckPlayer()
{
     // Possible ways to win for diagonal .. 
     //Check for player1
     if($("#01").hasClass('yellow') && $("#12").hasClass('yellow') && $("#23").hasClass('yellow') && $("#34").hasClass('yellow'))
     {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
         $("[class*=column-").off('click');
 
     }
     if($("#04").hasClass('yellow') && $("#13").hasClass('yellow') && $("#22").hasClass('yellow') && $("#31").hasClass('yellow'))
     {
        Swal.fire(
            'Good job!',
            'Player 1 wins',
            'success'
          )
         $("[class*=column-").off('click');
 
     }
     
 
     //Check for player2
     if($("#01").hasClass('red') && $("#12").hasClass('red') && $("#23").hasClass('red') && $("#34").hasClass('red'))
     {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
         $("[class*=column-").off('click');
 
     }
     if($("#04").hasClass('red') && $("#13").hasClass('red') && $("#22").hasClass('red') && $("#31").hasClass('red'))
     {
        Swal.fire(
            'Good job!',
            'Player 2 wins',
            'success'
          )
         $("[class*=column-").off('click');
 
     }
    

}


function resetBoard()
{
    $('button').click(function()
    {
        location.reload();
    });
}


})
