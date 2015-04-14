
$(document).ready(function(){
     
    var client_id = 'e4127deac7f44a658bd362e293ef9f6a';

    $("#getFeed").click(function () {

        var user_id = $("#user").val();
        var apiURL= "https://api.instagram.com/v1/users/search?q="+user_id+"&client_id=e4127deac7f44a658bd362e293ef9f6a&callback=?";     
       
        $.getJSON(apiURL, function(data){
             
             if(data.data.length == 0){
                 $("#fullname").text("not found");
             } else {
                $("#fullname").text(data.data[0].full_name);
                $("#profile_pic").attr("src", data.data[0].profile_picture);

            }
       
        });

    });
 
});
