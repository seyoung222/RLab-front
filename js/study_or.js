$(document).ready(function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'ko',
    headerToolbar: {
      left: '',
      center: '',
      right: 'prev,title,next'
    },
    initialDate: '2023-01-12',
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    events: eventObj,
    initialView: 'dayGridMonth' 
  });


  $('.tab1').click(function() {
    calendar.changeView('dayGridMonth');
  });

  
  $('.tab2').click(function() {
    calendar.changeView('listMonth');
  });

  calendar.render();
});
  
  let eventObj = [
        {
          title: '정처기 필기',
          start: '2023-01-03T12:00:00'
        },

        {
        title: '정처기 접수기간',
        start: '2023-01-10',
        end: '2023-01-15'
        },
        {
        title: '정처기 실기',
        start: '2023-01-29T12:00:00'
        },
        
    ]

  $(document).ready(function() {
    $(".add_todo").click(function() {
      var new_todo = '<div class="to_do_list_contents"><label><input type="checkbox"> <span class="todo-text">새로운 할 일</span></label></div><br>';
      $(".to_do_list_box1").append(new_todo);
    });

    $(".to_do_list_box1").on("click", "input[type=checkbox]", function() {
      if ($(this).prop("checked")) {
        $(this).parent().css({"text-decoration": "line-through", "color": "slategray"});
      } else {
        $(this).parent().css({"text-decoration": "none", "color": "black"});
      }
    });
    $(".to_do_list_box1").on("dblclick", ".todo-text", function() {
      var old_text = $(this).text().trim();
        // contenteditable 속성 추가하여 텍스트 수정 가능하도록 함
      $(this).attr("contenteditable", true);
      $(this).focus();
        // 엔터키를 누르면 텍스트 수정 종료하도록 이벤트 리스너 추가
      $(this).on("keydown", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          $(this).blur();
          } 
      });
      (this).on("blur", function() {
      var new_text = $(this).text().trim();
      $(this).attr("contenteditable", false);
      if (new_text !== "" && new_text !== old_text) {
        $(this).text(new_text);
      }
    });
  });
});