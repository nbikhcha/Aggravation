var $body = $("<body>");
var $div = $("<div>").attr("id", "1");
$body.children().append($div);
$("html").children().append($body);
$("#1").html('Happy Mother\'s Day Mama!');
