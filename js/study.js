document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    

    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      
    
    locale: 'ko',

      headerToolbar: {
        left: 'dayGridMonth,listMonth',
        center: '',
        right: 'prev,title,next'
      },
      initialDate: '2023-01-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
    
      events: eventObj
    
    });
    
    calendar.render();
  });
  // 나중에 데이터베이스 값을 가져오기위에 밑에 설정함
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

