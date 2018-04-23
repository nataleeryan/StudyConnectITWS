$(document).ready(function() {
    $.ajax({
      type: "GET",
      url: "classes.json",
      dataType: "json",
      success: function(responseData, status){
	      var output = '';  
        $.each(responseData.classes, function(i, classes) {
          output += '<h2>' + classes.type + '</h2>';
          output += '<p>';
        });
        $("#project").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
});