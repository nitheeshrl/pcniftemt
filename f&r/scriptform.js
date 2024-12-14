function sidebari(){
    var li = document.getElementById("sidebar").querySelectorAll("a");

var nliclick =['userPopup()','','','','','','','','','','','passkey()','logoutPopup()'];
var nlihref =['','dash.html','index.html','past.html','https://niftemt-placementcell-forms.pages.dev/B2K21%Brochure%Details%Update/user','new-placement-form.html','past-placement-forms.html','new-form.html','past-forms.html','all-users.html','change-pass-1.html','',''];
var nlitext =['','Dashboard','Active Requests','Past Requests','Request Form','New Placement Form','Old Placement Forms','New Form','Old Forms','Students Details','Change Password','Create PassKey','Logout'];

for(var h=1;h<li.length;h++){
    console.log(li[h].onclick)
li[h].setAttribute("onclick",nliclick[h]);
if(nlihref[h]!==''){
li[h].href=nlihref[h];
}

if (li[h].children.length==2){
    li[h].children[1].textContent=nlitext[h]; 
}
else{
li[h].textContent=nlitext[h];
}
}
 }
sidebari()