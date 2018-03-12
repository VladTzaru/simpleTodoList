$(function() {
	"use strict";
    

	// Do / Undo a toDo
    $("li").on("click", function() {
    	$(this).toggleClass("done");
    });


    // Remove a toDo
    $("span").on("click", function(e) {
    	e.stopPropagation();
    	$(this).parent().fadeOut("1000", "linear", function() {
    		$(this).remove();
    	});
    });



});