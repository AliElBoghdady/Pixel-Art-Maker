// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var height , width , color ; 
var form = $('#sizePicker');
var table = $('table'); // this is where we draw 

function makeGrid() {	
	
	form.submit(function(e){

		e.preventDefault(); // prevent sumbit reset
		if(table.html()!= '<tr><td></td></tr>'){
			table.html('<tr><td></td></tr>');
		}  //  resets the drawing canvas af
		
		height = $('#inputHeight').val() ;
		width = $('#inputWeight').val();

 		for (var i = 1; i <= height-1; i++) {    // These for loops to build the drawing canvas 
 			table.append('<tr><td></td></tr>');
 		}
 		for (var i = 1; i <= width-1 ; i++) {
 			$('tr').append('<td></td>')
 		}

 		$('td').click(function(){  // this function is for drawing when you click on any cell

			if($(this).css('background-color') == "rgb(255, 255, 255)"){
				$(this).css('background-color' , color)
			}
			else {
				$(this).css('background-color' , 'rgb(255, 255, 255)')
			}

		})
 		
	})
	$('td').click(function(){  // this function is for drawing when you click on any cell

			if($(this).css('background-color') == "rgb(255, 255, 255)"){
				$(this).css('background-color' , color)
			}
			else {
				$(this).css('background-color' , 'rgb(255, 255, 255)')
			}

		})

	color = $('#colorPicker').val(); // sets the default color (black)


	$('#colorPicker').change(function(){ // for picking any different color than the default 

 			return color = $('#colorPicker').val();	

 		})
}


$('input[type = submit]').click(makeGrid())