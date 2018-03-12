$(function() {
	"use strict";

	init();

	function init() {
		toggleDone();
		removeTodo();
	}
    

	// Do / Undo a toDo
	function toggleDone() {
		$("ul").on("click", "li", function() {
	    	$(this).toggleClass("done");
	    });
	}


	function removeTodo() {
	    $("ul").on("click", "span", function(e) {
	    	$(this).parent().fadeOut("1000", "linear", function() {
	    		$(this).remove();
	    	});
	    	e.stopPropagation();
	    });
	}


    // Add new toDo
    $(".input-toDo").keypress(function(e) {
    	if (e.which === 13) {
    		let inputVal = $(this).val();
    		if (inputVal === "") {
    			return;
    		} else {
    			$("ul").append(`<li><span>X</span> ${inputVal}</li>`);
    			$(this).val("").blur();
    		}
    	}
    });


});