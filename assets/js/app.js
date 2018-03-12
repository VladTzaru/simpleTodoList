$(function() {
	"use strict";

	init();

	function init() {
		toggleDone();
		removeTodo();
	}

	$(".btn-addTodo").click(function() {
		$(".input-toDo").toggleClass("toggleTodoInput");
	});


	// Clear everything
	function clearTodo() {
		$("li").remove();
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
    			$("ul").append(`<li><span class="btn-removeTodo"><i class="fas fa-trash"></i></span> ${inputVal}</li>`);
    			$(this).val("");
    		}
    	}
    });


    // Completely clear toDo
    $("#clearTodo").click(clearTodo);


});