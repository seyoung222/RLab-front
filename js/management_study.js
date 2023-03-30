// icon_info 마우스 오버시 설명창 나타났다가 out시 사라짐
$(document).ready(function(){
	$(".info_1")
			.on('mouseover', function show(){
				$(".info_finish").removeClass("display_none");
			})

			.on('mouseout', function(){
				$(".info_finish").addClass("display_none");
			})
})

$(document).ready(function(){
	$(".info_2")
			.on('mouseover', function show(){
				$(".info_delete").removeClass("display_none");
			})

			.on('mouseout', function(){
				$(".info_delete").addClass("display_none");
			})
})

