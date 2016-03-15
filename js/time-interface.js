var alarmClock = require('./../js/alarmClock.js').alarmClock;
var datetime = null, date = null;
var update = function () {
  date = moment(new Date());
  datetime.html(date.format('h:mm:ss a'));
};

function alarmCheck(time){
  date = new Date();
  date = Date.parse(date);
  if (time == date){
    $('#alarm').css('background-color', 'red');
  }
  console.log(typeof time);
  console.log("**"+time);
  console.log(typeof date);
  console.log("*"+date+"*");
}

$(document).ready(function(){
    datetime = $('#time');

    var alarmTime;

    $('#form').submit(function(event){
      event.preventDefault();
      var hour = $('#hour').val();
      var minute = $('#minute').val();
      var alarm = alarmClock(hour, minute);

      $('#alarm').text(alarm);
      alarmTime = Date.parse(alarm);
      console.log(alarmTime+"***");
      alarmCheck(alarmTime);
      setInterval(alarmCheck, 1000, alarmTime);
    });


    update();
    setInterval(update, 1000);





});
