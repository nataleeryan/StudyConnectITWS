// var groupname = "example";

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
function math_groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
          if(item.createCourse == "MATH"){

            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function itws_groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
          if(item.createCourse == "ITWS"){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function cs_groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
          if(item.createCourse == "CS"){

            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}
function all_groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}

function search(){
  var value = $("#searchInput").val();
  $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
          if(item.createTitle == value){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';            
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}

// $("#search").click(function(){
//     $.ajax({
//         type: "GET",
//         url: "feed.js",
//         dataType: "json",
//         success: function(responseData, status){
          
//           /*Loop through the entire JSON file and form the outputs properly for display*/
//       var x = 0;
//           var output = "Search Results: <br>";
//           $.each(responseData, function(i, item) {
//             if(item.username == $("#searchText").val()){
//               x = 1;
//               output += "User " + item.username + " found with password: " + item.password + "<br>";
//             }
//           });
//           if(x == 0){
//             output += "NO USER FOUND";
//           }
//           /*Print the outputs to the DOM object #projects*/
//           $('#searchResult').html(output);
//         }, error: function(msg) {
//           // error message incase there was an issue
//           alert("There was a problem: " + msg.status + " " + msg.statusText);
//         }
//       });
//   });

function groups(groupname){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '<ul>';  
        $.each(responseData, function(i, item) {
          if(item.createTitle == groupname){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole"> @' + item.createLocation + '</h3>';
            output += '<p class="groupOwner"> Started at date: ' + item.createDate + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location:</p>';
            output += '<p>Time:</p>';
            output += '</div>';
            output += '</div>';            
          }
        });
        $("#button").html(output);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}