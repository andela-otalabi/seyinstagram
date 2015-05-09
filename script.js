var instaApi = {
  searchButton: $("#getFeed"),    
  fullName: $("#fullname"),
  profilePhoto: $("#profile_pic"),
  userId: $("#user"),

  init: function(){
    instaApi.searchButton.click(function(){
      instaApi.setData();
    })
  },

  setData: function() {
    var userid = instaApi.userId.val();
    var apiURL = "https://api.instagram.com/v1/users/search?q="+userid+"&client_id=e4127deac7f44a658bd362e293ef9f6a&callback=?";
    instaApi.gettingData(apiURL);
  },

  gettingData: function(apiURL) {
    $.getJSON(apiURL, function(data){
      if(data.data.length == 0){
        fullName.text("not found");
      }
      else {
        instaApi.fullName.text(data.data[0].full_name);
        instaApi.profilePhoto.attr("src", data.data[0].profile_picture);
      }      
    });
  }      
};

instaApi.init();

/*$(document).ready(function(){
     
    var client_id = 'e4127deac7f44a658bd362e293ef9f6a';

    $("#getFeed").click(function () {

        var user_id = $("#user").val();
        console.log(user_id);
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
 
});*/
