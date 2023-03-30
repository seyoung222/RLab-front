// icon_info 마우스 hover시 설명창 나타남
function toggleInfo(target){
	$(target).toggleClass("display_none");
}

$(document).ready(function(){
	$(".info_1, .info_2").hover(function(){
		if(this.classList.contains("info_1")){
			toggleInfo(".info_finish");
		}else if(this.classList.contains("info_2")){
			toggleInfo(".info_delete");
		}
	})
})


// 버튼 클릭시 confirm창 나타남
$(".btn_finish").on("click", function() {
  if (confirm("완료된 스터디로 전환 시 스터디 활동이 일부 제한되며, 자유게시판만 사용가능합니다. 목표를 달성하거나 일정이 모두 완료된 경우에만 전환할 것을 권유드립니다. 정말 완료하시겠습니까?")) {
    // 사용자가 "확인" 버튼을 클릭한 경우 수행할 작업
    console.log("완료 실행");
  } else {
    // 사용자가 "취소" 버튼을 클릭한 경우 수행할 작업
    console.log("완료 취소");
  }
});

$(".btn_delete").on("click", function() {
  if (confirm("스터디 삭제 시 스터디에올라온 게시글, 인증내역, 일정, 회원정보 등 모든 정보가 함께 삭제되며 해당 스터디에 접근이 불가합니다. 정말 삭제하시겠습니까?")) {
    // 사용자가 "확인" 버튼을 클릭한 경우 수행할 작업
    console.log("삭제 실행");
  } else {
		// 사용자가 "취소" 버튼을 클릭한 경우 수행할 작업
    console.log("삭제 취소");
  }
});

