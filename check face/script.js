
function getuserdetailsface(user){


  var formDataString =user+"/12";
  console.log(formDataString)
  //document.getElementById("loader").style.display="block"; 
          document.getElementById("load").style.display="initial";
          document.getElementById("message1").textContent="Logging in....";
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
      const result1 = await data.json();
  var userdetails = result1.data2;
  
  
  console.log(userdetails)
  
  if (userdetails[0]!=="Not Found"){
  //passkey(userdetails[2],passdevuniid,userdetails[3],userdetails[4],userdetails[5],userdetails[7]);
  localStorage.setItem("loggedname",userdetails[2]);
  localStorage.setItem("loggeduorp", userdetails[3]);
  localStorage.setItem("loggedpic", userdetails[4]);
  localStorage.setItem("loggedmail", userdetails[5]);
  localStorage.setItem("loggeduserdetails", userdetails[7]);
  var  uname = localStorage.getItem("loggedname");
  console.log(uname)
  document.getElementById("loader").style.display="none"; 
  //document.getElementById("message").textContent="Logged in Successful";
  document.getElementById("message1").innerHTML="Welcome, <b>"+userdetails[2]+"</b>";
  setTimeout(function () { 
  //document.getElementById("load").style.display="none";
 
  
  
  
  var lastpage = sessionStorage.getItem("lastpage");
  if (lastpage==undefined||lastpage==""){
    window.location="../f&r/dash.html";
  }
  else{
  window.location=lastpage;
  sessionStorage.removeItem("lastpage");
  }
  },2000);
  }
  else if (userdetails[0]=="Not Found"){
  alert("User not found")
  document.getElementById("load").style.display="none";
  }
    })
  
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while verify credentials";
      document.getElementById("message").style.display = "block";
    });
  }  

const video = document.getElementById("video");
let username = ["unknown"];
Promise.all([
  faceapi.nets.ssdMobilenetv1.loadFromUri("models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("models"),
]).then(startWebcam);

function startWebcam() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((stream) => {
      window.localStream = stream;
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error(error);
    });
}
function vidOff() {
  localStream.getVideoTracks()[0].stop();
  video.src = '';
}

function getLabeledFaceDescriptions() {
  var check_name = sessionStorage.getItem("checkname");
  console.log(check_name)
  if(check_name !== null){
  const labels = [check_name];
  return Promise.all(
    labels.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(`./labels/${label}/${i}.png`);
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}
else{
  alert("ID Number not entered")
  window.location="../face.html";
}
}

video.addEventListener("play", async () => {
  const labeledFaceDescriptors = await getLabeledFaceDescriptions();
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
  console.log(faceMatcher)
  console.log(labeledFaceDescriptors)

  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  var checkingname = setInterval(async () => {
    document.getElementById("nostatus").style="color: black;";
    document.getElementById("nostatus").textContent="Verifying your face";
    const detections = await faceapi
      .detectAllFaces(video)
      .withFaceLandmarks()
      .withFaceDescriptors();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    const results = resizedDetections.map((d) => {
      console.log(faceMatcher.findBestMatch(d.descriptor))
      return faceMatcher.findBestMatch(d.descriptor);
    });
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result,
      });
      console.log(result.distance)
      if (username[0]=="unknown" && result.label!=="unknown" &&result.distance > 0.4 ){
        username[0] = result.label;

      }
      else if (result.distance > 0.4){
        username.push(result.label);

      }
 
    });
  }, 100);
  var findname = setInterval(function( ) { 
    

const allEqual = arr => arr.every(val => val === arr[0]);
const finalcheck = allEqual(username);
var namechecked ="unknown";
if (finalcheck && username[0] !== "unknown"){
  console.log(username)
const mostFrequent = Array.from(new Set(username)).reduce((prev, curr) =>
  username.filter(el => el === curr).length > username.filter(el => el === prev).length ? curr : prev
);
console.log(mostFrequent); 
namechecked = mostFrequent;
console.log(namechecked)

if (namechecked !== "unknown" && username[0] !== "unknown" ){
  console.log("done")
  clearInterval( checkingname ); 
  clearInterval( findname ); 
  sessionStorage.setItem("namestu",namechecked);
  vidOff();
  document.getElementById("loader").style.display="none";
  document.getElementById("message").style.display="none"; 
  document.getElementById("load").style.display = "initial";
  document.getElementById("bg").style.display="none"; 
getuserdetailsface(namechecked);
 
 }   
}
else{
  console.log("noo")
  document.getElementById("nostatus").style="color: red;";
  document.getElementById("nostatus").textContent="Could not get your face. Try in good lighting";
  username = ["unknown"];
}
  }, 2000);
  setTimeout(function( ) { 


const allEqual = arr => arr.every(val => val === arr[0]);
const finalcheck = allEqual(username);
var namechecked ="";
console.log(finalcheck)
if (finalcheck && username[0] !== "unknown" ){
  clearInterval( checkingname ); 
  clearInterval( findname ); 
  console.log(username)
const mostFrequent = Array.from(new Set(username)).reduce((prev, curr) =>
  username.filter(el => el === curr).length > username.filter(el => el === prev).length ? curr : prev
);
console.log(mostFrequent);  
namechecked = mostFrequent; 
console.log(namechecked)

if (namechecked !== "unknown"){
  console.log("done")
  sessionStorage.setItem("namestu",namechecked);
  vidOff();
  document.getElementById("loader").style.display="none";
  document.getElementById("message").style.display="none"; 
  document.getElementById("load").style.display = "initial";
getuserdetailsface(namechecked);
  document.getElementById("bg").style.display="none"; 
  sessionStorage.removeItem("checkname"); 

 }
}  
else{
  vidOff();
  document.getElementById("nostatus").textContent="";
  document.getElementById("message1").style.display="none"; 

  document.getElementById("bg").style.display="none"; 
  document.getElementById("message").textContent="Unable to Verify the Face. Refresh the page to retry again.";
  document.getElementById("loader").style.display="none"; 
  document.getElementById("load").style.display="initial";
 
  username = ["unknown"];
}  
  }, 10000);
});

