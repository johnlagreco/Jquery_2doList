$(document).ready(function(){

	var enteredText = $("input").val()

	$('#newItemForm').on("submit", function(e){
		e.preventDefault();
		$("ol").append("<li>"+$("#itemDescription").val()+"</li>");
// this puts the cursor in the field
		document.getElementById("itemDescription").focus();
// this clears the field of the last entry
		document.getElementById("itemDescription").value = "";

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

// this puts the cursor with the placeholder when the page loads
	window.onload = function() {
    	document.getElementById("itemDescription").focus();
	};
});

