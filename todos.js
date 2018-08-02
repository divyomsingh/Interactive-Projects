$("ul").on("click","li", function(){
 $(this).toggleClass("completed");
});

//deleting the todos using X span

$("ul").on("click","span", function(event){
	
	$(this).parent().fadeOut(350, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
console.log("Hello");

 $("input[type='text']").keypress(function(event){ 
	if(event.which === 13)
	{
		
		var todoText = $(this).val();
		

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

 $(".fa-plus").click(function(){
 	$("input[type='text']").fadeToggle();
 });