$(document).ready(function(){
	$('.btn-new').click(function(e){
		e.preventDefault();
		var id_cont = "#" + this.dataset.content;
		$(id_cont).css({top: '0px'});
	});
	$('.btn-close').click(function(e){
		e.preventDefault();
		var id_cont = "#" + this.dataset.parent;
		$(id_cont).css({top: '-100%'});
	});
});