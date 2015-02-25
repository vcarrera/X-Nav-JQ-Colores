var orig;
$(document).ready(function() {
	$("#orderedlist").addClass("orange");
	$("#orderedlist > li").addClass("blue");
	$("#orderedlist > li:last").hover(function() {
        orig=$(this).css("color")
		$(this).css("color","green");
	},function(){
		$(this).css("color",orig);
	});
});
