document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    
     titleFormat: function (date) {
     year = date.date.year;
     month = date.date.month + 1;
     day = date.date.day

     return year + "년 " + month + "월" ;
     },

      headerToolbar: {
        left: 'dayGridMonth,listMonth',
        center: 'title',
        right: 'prev,next,'
      },
      initialDate: '2023-01-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
        title: '정처기 필기',
        start: '2023-01-03'
        },

        {
        title: '정처기 접수기간',
        start: '2023-01-10',
        end: '2023-01-15'
        },
        {
        title: '정처기 실기',
        start: '2023-01-29'
        },
    ]
    });

    calendar.render();
  });