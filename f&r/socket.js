var eerid  = localStorage.getItem("loggeduserdetails");
var newUserId = JSON.parse(eerid).id +"/P";
//const { io } = require("socket.io-client");
const socket = io("https://web-socket-1-kmp6.onrender.com/");
// server-side


// client-side

socket.on('connect', function() { 
socket. emit( 'user_connected', newUserId);
});


socket.on("disconnect", () => {
console.log(socket.id); // undefined

});
const handleFocus = async () => {
  socket. emit( 'user_connected', newUserId);
};

// Tab closed
const handleBlur = () => {

    socket.emit("offline")   
  
};

// Track if the user changes the tab to determine when they are online
window.addEventListener('focus', handleFocus);
window.addEventListener('blur', handleBlur);