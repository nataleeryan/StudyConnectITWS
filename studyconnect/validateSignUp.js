function validateForm()
{
  var a=document.forms["Form"]["firstName"].value;
  var b=document.forms["Form"]["lastName"].value;
  var c=document.forms["Form"]["email"].value;
  var d=document.forms["Form"]["rin"].value;
  var e=document.forms["Form"]["password"].value;

  if (a==null || a=="", b==null || b=="", c==null || c=="", d==null || d=="", e==null || e==""){
    alert("Please fill in all fields.");
    return false;
  }
};

function validateLogin() {
  var a=document.forms["Login"]["login-rin"].value;
  var b=document.forms["Login"]["login-password"].value;

  if (a==null || a=="", b==null || b==""){
      alert("Missing username or password.");
      return false;
  }
}
