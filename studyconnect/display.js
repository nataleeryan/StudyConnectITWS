function itws(){

   $.ajax({
      type: "GET",
      url: "classes.json",
      dataType: "json",
      success: function(responseData, status){
	      var output = '';  
        $.each(responseData.classes, function(i, classes) {
          if (classes.type == "itws"){
            output += '<h2>' + classes.type + '</h2>';
            output += '<p>';
            output += '<h2>' + classes.description + '</h2>';
            output += '<p>';
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function biol(){

   $.ajax({
      type: "GET",
      url: "classes.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData.classes, function(i, classes) {
          if (classes.type == "biol"){
            output += '<h2>' + classes.type + '</h2>';
            output += '<p>';
            output += '<h2>' + classes.description + '</h2>';
            output += '<p>';

          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function math(){

   $.ajax({
      type: "GET",
      url: "classes.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData.classes, function(i, classes) {
          if (classes.type == "math"){
            output += '<h2>' + classes.type + '</h2>';
            output += '<p>';
            output += '<h2>' + classes.description + '</h2>';
            output += '<p>';
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        for (var i=0; i<responseData.length; i++) {
         alert(responseData[i]);
        }
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}