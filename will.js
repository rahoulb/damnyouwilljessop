var WILL = {
  checkStatus: function() {
    $.getJSON('/proxy.php', function(data){
      if (data.status.mood === 'good') {
        WILL.doneGood();
      } else {
        WILL.isAWrongUn();
      }
    });
    setTimeout('WILL.checkStatus()', 30000);
  },
  doneGood: function() {
    $('#will').attr('src', '/willj.jpg');
    $('h1').html('This is the lovely Will Jessop');
    $('#message').html('He works as a sysadmin at <a href="http://37signals.com">37Signals</a> and organises the <a href="http://nwrug.org">North West Ruby User Group</a>');
  },
  isAWrongUn: function() {
    $('#will').attr('src', '/fist.gif');
    $('h1').html('Damn you Will Jessop!');
    $('#message').html('37Signals is down and it\'s probably Will\'s fault!');
  }
}

$(function() {  
  WILL.checkStatus();
  $('a.test-me').click(function() {
    WILL.isAWrongUn();
  });
});