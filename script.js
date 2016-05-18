$(document).ready(function(){

	var enteredText = $("input").val()

	$('#newItemForm').on("submit", function(e){
		e.preventDefault();
		$("ol").append("<li>"+$("#itemDescription").val()+"</li>");
		document.getElementById("itemDescription").focus();

		// This removes the item from the list
		$("li").on('click',function(){
			$(this).remove();
			document.getElementById("itemDescription").focus();
		});
	});

	$("li").on('click',function(){
		$(this).remove();
		document.getElementById("itemDescription").focus();
	});

// this puts the cursor with the placeholder
	window.onload = function() {
    	document.getElementById("itemDescription").focus();
	};

});

