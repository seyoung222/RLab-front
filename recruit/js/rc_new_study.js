$(document).ready(function() {
  $('.yes_finish').click(function() {
    $('.datepicker').show();
    $('.yes_finish').css('background-color', '#66a0e2');
    $('.no_finish').css('background-color', '');
  });

  $('.no_finish').on('click', function() {
    $('.datepicker').hide();
    $('.no_finish').css('background-color', '#66a0e2');
    $('.yes_finish').css('background-color', '');
  });

});