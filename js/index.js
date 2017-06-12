$(document).ready(function(){
$("#newQuote").on('click', function() {
  $.ajaxSetup({cache: false});  
  var apiUrl="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback="
  $.getJSON(apiUrl, function(data) {    
    $(".quotes").html(data[0].content + "-" + data[0].title)    
    $("#tweetButton").on('click', function() {
  var twitterUrl = 'https://twitter.com/intent/tweet?text=' + data[0].content + "-" + data[0].title;
    window.open(twitterUrl, 'twitter');
    return false;
});
});
});  
});