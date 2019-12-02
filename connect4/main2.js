// Using 2D array

//console.log('hello')
let player1 = 0;
let player2 = 1;


$(document).ready(function()
{
    //Delete it later
function setupEventListeners()
{
    //To return the index of the column
    function bottomCell(col)
    {
        const cellsInAColumn = $('.box[data-col='+ col + ']')
        //console.log(cellsInAColumn); // see if there are empty cells in a column
        for (let i = cellsInAColumn.length - 1; i>=0; i--)
        {
            const cell = $(cellsInAColumn[i]);
            console.log(cell) //indicating the first cell!
            if(cell.hasClass('.box'))
            {

                console.log('no yellow')
                return cell;
            }
            else
            {
                return null;
            }

            
            
        }
       


    }
    $('#board').on('mouseenter','.box',function()
    {
        //console.log('yes',this) //'this' to print the row
        const col = $(this).data('col')
        //console.log(col)
       
        

    });
}

setupEventListeners()




});
