function checkinternet(){
    var status = navigator.onLine;
    var element_box = document.getElementById("internetstatus-box");
    var element = document.getElementById("internetstatus");
    console.log(status,udecide)
    if(udecide ==""){
    if (!status&&!element.classList.contains('offline')){
        console.log("Offline");
        document.getElementById("internetstatus").classList.remove('online')
        document.getElementById("internetstatus").classList.toggle('offline')
        element.children[0].textContent="You are Offline";
        element_box.style.display="flex"
        updatelogstatus2("Offline");  
        
    }
    else if(status&&!element.classList.contains('online')){
        console.log("Online")
        document.getElementById("internetstatus").classList.remove('offline')
        document.getElementById("internetstatus").classList.toggle('online')
        element.children[0].textContent="You are Online again";
        setTimeout(function () { element_box.style.display="none"; },2000);
    }
    }
}

setInterval(checkinternet,100)

function getuserdetailsonload(user){
    console.log("User Detail Fetching....")
    var ruserdetails = localStorage.getItem("loggeduserdetails");

      var formDataString =user+"/2";
      console.log(formDataString)
  
      fetch(
        "https://script.google.com/macros/s/AKfycbzqSHjVCXfU1DIQzUCEYcBFVssU9MISesB1WPePdf6_n4JcTii9Dh5c-_I7IoGVYjMJAw/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      )
  
        .then(function (response) {
  
          // Check if the request was successful
          if (response) {
       
            return response; // Assuming your script returns JSON response
          } else {
            throw new Error("Failed to verify credentials");
          }
        })
        .then(async function (data) {
          getuserdetailsonload(uid+"/12");
          const result1 = await data.json();
  var userdetails = result1.data2;
  if 
  (userdetails[0] == "Not Found") {
    console.log("User Not Found");
    udecide ="deny";
    document.getElementById("internetstatus").classList.toggle('msg')
    document.getElementById("internetstatus-box").classList.toggle('msg')
    document.getElementById("internetstatus").children[0].textContent="Can't find your details. Contact administrator";
    document.getElementById("internetstatus-box").style.display="flex"
    setTimeout(function () { 

      localStorage.removeItem("loggedname");
      localStorage.removeItem("loggeduorp");
      localStorage.removeItem("loggedpic");
      localStorage.removeItem("loggedmail");
      localStorage.removeItem("loggeduserdetails");
      window.location="../index.html";
   //   document.getElementById("internetstatus").classList.remove('msg')
     // document.getElementById("internetstatus-box").classList.remove('msg')
     // document.getElementById("internetstatus").children[0].textContent="You are online";
      //document.getElementById("internetstatus-box").style.display="flex"
    udecide ="";

     },5000);

    return;
  }
//console.log(userdetails)
  var udata = userdetails[7];
 //console.log(udata)
 var na = localStorage.getItem("loggedname");
 var naor =    localStorage.getItem("loggeduorp");
 var napic =   localStorage.getItem("loggedpic");
 var namail =    localStorage.getItem("loggedmail");
 var nrid  = localStorage.getItem("loggeduserdetails");

  localStorage.setItem("loggedname", userdetails[2]);
  localStorage.setItem("loggeduorp", userdetails[3]);
  localStorage.setItem("loggedpic", userdetails[4]);
  localStorage.setItem("loggedmail", userdetails[5]);
  localStorage.setItem("loggeduserdetails",udata);
  //setdata()

  var rna = localStorage.getItem("loggedname");
  var rnaor =    localStorage.getItem("loggeduorp");
  var rnapic =   localStorage.getItem("loggedpic");
  var rnamail =    localStorage.getItem("loggedmail");
  var rid  = localStorage.getItem("loggeduserdetails");
  document.getElementById("profileimage").src = rnapic;
  document.getElementById("profileimage1").src = rnapic;
  console.log(rid,nrid)
  console.log(rid,nrid,rna,na,rnaor,naor,rnapic,napic,namail,rnamail)
  if(rid!==nrid||rna!==na||rnaor!==naor||rnapic!==napic||namail!==rnamail){
    console.log("New Reload")
   location.reload();
  }
        })
  
        .catch(function (error) {
          // Handle errors, you can display an error message here
          console.error(error);
          getuserdetailsonload(uid+"/12");
        });
      }
 
      var rid  = localStorage.getItem("loggeduserdetails");
   console.log(rid)
   console.log(rid!=="undefined")
      if(rid!=="undefined"&&rid!==undefined&&rid!==""&&rid!==null){
        var uid = JSON.parse(rid).id;
        if(uid.includes("PC")){
          var vlog = localStorage.getItem("loggedname");
          setTimeout(function () {  getuserdetailsonload(vlog+"/1"); },2000);
        }
        else{
      setTimeout(function () {   getuserdetailsonload(uid+"/12"); },2000);
        }
      }
      else if(rid=="undefined"||rid==undefined||rid==""||rid==null){
        var vlog = localStorage.getItem("loggedname");
      setTimeout(function () {  getuserdetailsonload(vlog+"/1"); },2000);
       
        }
     
  