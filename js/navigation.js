var ascensor = $('#ascensorBuilding').ascensor();
var ascensorInstance = $('#ascensorBuilding').data('ascensor');
				
$(".direction").click(function() {
	ascensorInstance.scrollToDirection($(this).data("direction"));
});	

$(".links-to-floor li").click(function(event, index) {
	ascensorInstance.scrollToFloor($(this).index());
});

$(".links-to-floor li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

ascensor.on("scrollStart", function(event, floor){
	$(".links-to-floor li").removeClass("selected");
	$(".links-to-floor li:eq("+floor.to+")").addClass("selected");
});