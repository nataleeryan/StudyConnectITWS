// var groupname = "example";

$( document ).ready(function() {

  //Close the groupCreate div
  $("#createGroup").toggle();

  //Display groups from all classes on load
  all_groups();

 $.ajax({
    type: "GET",
    url: "classes.json",
    dataType: "json",
    success: function(responseData, status){
      var output = '';
      $.each(responseData, function(i, item) {
          output += '<button type="button4" onclick="groups_course(&#39;';
          output += item.course;
          output += '&#39;)">';
        output += item.course;
        output += '</button>';
      });
      output += '<button type="button4" onclick="all_groups()"> ALL </button>';
      $("#addClassBig").html(output);
    }, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
   });
 });

//Function to display createGroup div
function createShow(){
  $("#createGroup").toggle(500);
}


function all_groups(){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData, function(i, item) {
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole">' + item.createCourse + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location: ' + item.createLocation + '</p>';
            output += '<p>Date: ' + item.createDate + '</p>';
            output += '</div>';
            output += '</div>';
        });
        $("#button").html(output);

        $("#act-className").html("ALL CLASSES");
        $("#act-classDesc").html("Click a class above or search for one below!");

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
        var x = 0;
        var output = '';  
        $.each(responseData, function(i, item) {
          if(item.createTitle == value){
            x = 1;
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole">' + item.createCourse + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location: ' + item.createLocation + '</p>';
            output += '<p>Date: ' + item.createDate + '</p>';
            output += '</div>';
            output += '</div>';           
          }
        });
        if(x == 0){
          output += '<h1 style="margin:50px 25% 0 25%; color:red; width:50%;">No groups found!</h1>';  
        }
        $("#button").html(output);

        $("#act-className").html("SEARCH RESULTS");
        $("#act-classDesc").html("Your search results are displayed to the right!");

      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}

function classes(){
  var value = $("#searchInput").val();
  $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData, function(i, item) {
          if(item.createTitle == value){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole">' + item.createCourse + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location: ' + item.createLocation + '</p>';
            output += '<p>Date: ' + item.createDate + '</p>';
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

function groups(groupname){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData, function(i, item) {
          if(item.createTitle == groupname){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole">' + item.createCourse + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location: ' + item.createLocation + '</p>';
            output += '<p>Date: ' + item.createDate + '</p>';
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
function groups_course(groupcourse){

   $.ajax({
      type: "GET",
      url: "feed.json",
      dataType: "json",
      success: function(responseData, status){
        var output = '';  
        $.each(responseData, function(i, item) {
          if(item.createCourse == groupcourse){
            output += '<div class="group">';
            output +=  '<div class="groupBanner">';
            output += '<h3 class="groupTitle">' + item.createTitle + '</h3>';
            output += '<h3 class="groupRole">' + item.createCourse + '</h3>';
            output += '</div>';
            output += '<div class="groupDesc">' + item.createDesc + '</div>';
            output += '<div class="groupFiller"></div>';
            output += '<div class="groupButtons">';
            output += '<button>View Memebers</button>';
            output += '<button>Join Group</button>';
            output += '</div>';
            output += '<div class="groupDate">';
            output += '<p>Location: ' + item.createLocation + '</p>';
            output += '<p>Date: ' + item.createDate + '</p>';
            output += '</div>';
            output += '</div>';           
          }
        });
        $("#button").html(output);

        $("#act-className").html(groupcourse);
        $("#act-classDesc").html("Groups for this course are displayed to the right!");

      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
}


