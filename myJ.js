
$(document).ready(function(){
	
    $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=281a8a888eaba4ef8b926653438e4510&set=72157623858739780&format=json&jsoncallback=?", function(data){
    $.each(data.items, function(i,item){
    $("<img/>").attr("src", item.media.m).appendTo("#images")
      .wrap("<a href='" + item.link + "'></a>");


  });

    $('#images').cycle({
    fx:     'fade',
    speed:    'fast',
    timeout:  0,
    next:   '#next',
    prev:   '#prev'
});
  
});

var userKey ="281a8a888eaba4ef8b926653438e4510";
	 //$('p').userInformation(function(){
	 //var apiURL= "https://api.instagram.com/v1/users/{user-id}/media/recent/?client_id=e4127deac7f44a658bd362e293ef9f6a";



