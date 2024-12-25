var udecide ="";
var ustatus ;
function sidebari(){
    var umenu =
    `    <ul>
      <li class="indetails" id="insname">
        <div style="width: 50px; display: flex;gap: 10px;">
          <img style="width: 50px;" src="white_logo.png" alt="">
          <span style="color: white;">NIFTEM-T <br> Placement Cell</span>
        </div>
        
        <button onclick=toggleSidebar() id="toggle-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
        </button>
      </li>
      <li class="outdetails" id="outlogo" style="">
        <button class="out-items" onclick=toggleSidebar1() id="toggle-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
        </button>
        <img class="out-items" style="width: 50px;" src="white_logo.png" alt="">
        <img class="pro-img" id="profileimage1" style=" scale:90%;border-radius: 50px; width: 50px; height: 50px; " src=".//1.png" alt="" srcset="">
       
      </li>
      <li class="indetails"  id="insprofile" style="left: 0px;">
        <div class="log-items" style="flex-direction: column; gap: 0px; align-items: center;justify-content: center;">
         <a onclick="userPopup()"><img class="pro-img" id="profileimage" style=" scale:200%;border-radius: 50px; width: 50px; height: 50px; " src=".//1.png" alt="" srcset=""></a>
       <div style="background-color: white; color: black; padding: 10px;border-radius: 40px;">
        <p ><span id="mname"></span></p>
       </div>
       

          </div>

      </li>
      <li>
        <a href="dash.html">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <button onclick=toggleSubMenu(this) class="dropdown-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm400-160v40q0 17 11.5 28.5T600-320q17 0 28.5-11.5T640-360v-40h40q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480h-40v-40q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520v40h-40q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400h40Z"/></svg>
          <span>Brochure Update</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="index.html">Active Requests</a></li>
            <li><a href="past.html">Past Requests</a></li>
            <li><a  target="_blank" href="https://niftemt-placementcell-forms.pages.dev/B2K21%20Brochure%20Details%20Update/user">Request Form</a></li>
          </div>
        </ul>
      </li>
      <li>
        <button onclick=toggleSubMenu(this) class="dropdown-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z"/></svg>
          <span>Forms</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="new-placement-form.html">New Placement Form</a></li>
            <li><a  href="past-placement-forms.html">Old Placement Forms</a></li>
            <li><a href="new-form.html">New Form</a></li>
            <li><a  href="past-forms.html">Old Forms</a></li>
          </div>
        </ul>
      </li>
      <li >
        <a href="all-users.html">
             <svg viewBox="0 0 24 24" height="24px" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H9C9.55228 21 10 21.4477 10 22C10 22.5523 9.55228 23 9 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM18 19C15.2951 19 14 20.6758 14 22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22C12 20.1742 13.1429 18.5122 14.9952 17.6404C14.3757 16.936 14 16.0119 14 15C14 12.7909 15.7909 11 18 11C20.2091 11 22 12.7909 22 15C22 16.0119 21.6243 16.936 21.0048 17.6404C22.8571 18.5122 24 20.1742 24 22C24 22.5523 23.5523 23 23 23C22.4477 23 22 22.5523 22 22C22 20.6758 20.7049 19 18 19ZM18 17C19.1046 17 20 16.1046 20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17Z" ></path> </svg>
          <span>Students Details</span>
        </a>
      </li>
      <li>
       
          <button onclick=toggleSubMenu(this) class="dropdown-btn">
          
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <span>Profile</span>
   
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
          </button>
        <ul class="sub-menu">
          <div>
            <li><a href="change-pass-1.html">Change Password</a></li>
            <li><a onclick="passkey1()">Create PassKey</a></li>
            <li><a onclick="alllogoutPopup()" >Logout</a></li>
          </div>
        </ul>
      </li>

    </ul>`;
    var amenu =
    `    <ul>
      <li class="indetails" id="insname">
        <div style="width: 50px; display: flex;gap: 10px;">
          <img style="width: 50px;" src="white_logo.png" alt="">
          <span style="color: white;">NIFTEM-T <br> Placement Cell</span>
        </div>
        
        <button onclick=toggleSidebar() id="toggle-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
        </button>
      </li>
      <li class="outdetails" id="outlogo" style="">
        <button class="out-items" onclick=toggleSidebar1() id="toggle-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
        </button>
        <img class="out-items" style="width: 50px;" src="white_logo.png" alt="">
        <img class="pro-img" id="profileimage1" style=" scale:90%;border-radius: 50px; width: 50px; height: 50px; " src=".//1.png" alt="" srcset="">
       
      </li>
      <li class="indetails"  id="insprofile" style="left: 0px;">
        <div class="log-items" style="flex-direction: column; gap: 0px; align-items: center;justify-content: center;">
         <a onclick="userPopup()"><img class="pro-img" id="profileimage" style=" scale:200%;border-radius: 50px; width: 50px; height: 50px; " src=".//1.png" alt="" srcset=""></a>
       <div style="background-color: white; color: black; padding: 10px;border-radius: 40px;">
        <p ><span id="mname"></span></p>
       </div>
       

          </div>

      </li>
      <li>
        <a href="dash.html">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <button onclick=toggleSubMenu(this) class="dropdown-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm400-160v40q0 17 11.5 28.5T600-320q17 0 28.5-11.5T640-360v-40h40q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480h-40v-40q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520v40h-40q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400h40Z"/></svg>
          <span>Brochure Update</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="index.html">Active Requests</a></li>
            <li><a href="past.html">Past Requests</a></li>
            <li><a  target="_blank" href="https://niftemt-placementcell-forms.pages.dev/B2K21%20Brochure%20Details%20Update/user">Request Form</a></li>
          </div>
        </ul>
      </li>
      <li>
        <button onclick=toggleSubMenu(this) class="dropdown-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z"/></svg>
          <span>Forms</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="new-placement-form.html">New Placement Form</a></li>
            <li><a  href="past-placement-forms.html">Old Placement Forms</a></li>
            <li><a href="new-form.html">New Form</a></li>
            <li><a  href="past-forms.html">Old Forms</a></li>
          </div>
        </ul>
      </li>
 <li>
 <button onclick=toggleSubMenu(this) class="dropdown-btn">
   
   <svg viewBox="0 0 24 24" height="24px" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H9C9.55228 21 10 21.4477 10 22C10 22.5523 9.55228 23 9 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM18 19C15.2951 19 14 20.6758 14 22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22C12 20.1742 13.1429 18.5122 14.9952 17.6404C14.3757 16.936 14 16.0119 14 15C14 12.7909 15.7909 11 18 11C20.2091 11 22 12.7909 22 15C22 16.0119 21.6243 16.936 21.0048 17.6404C22.8571 18.5122 24 20.1742 24 22C24 22.5523 23.5523 23 23 23C22.4477 23 22 22.5523 22 22C22 20.6758 20.7049 19 18 19ZM18 17C19.1046 17 20 16.1046 20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17Z" ></path> </svg>
   <span>User Details</span>

   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
 </button>
 <ul class="sub-menu">
   <div>
     <li><a href="all-users.html">Students</a></li>
     <li><a  href="all-musers.html">Members</a></li>
   </div>
 </ul>
</li>
      <li>
       
          <button onclick=toggleSubMenu(this) class="dropdown-btn">
          
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            <span>Profile</span>
   
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
          </button>
        <ul class="sub-menu">
          <div>
            <li><a href="change-pass-1.html">Change Password</a></li>
            <li><a onclick="passkey1()">Create PassKey</a></li>
            <li><a onclick="alllogoutPopup()" >Logout</a></li>
          </div>
        </ul>
      </li>

    </ul>`;
    var path = window.location.pathname;
    var rwnrid  = localStorage.getItem("loggeduserdetails");
    var wnrid  = JSON.parse(rwnrid);
    console.log(wnrid.role)
    if(wnrid.role == "Admin"){
    document.getElementById("sidebar").innerHTML = amenu;
    document.getElementById("profileimage").src = localStorage.getItem("loggedpic");
    document.getElementById("profileimage1").src = localStorage.getItem("loggedpic");
    document.getElementById("mname").innerHTML = localStorage.getItem("loggedname");
    }
    else if(wnrid.role == "User"){
      if (path.includes("all-musers")){
        udecide ="deny";
        document.getElementById("internetstatus").classList.toggle('msg')
        document.getElementById("internetstatus-box").classList.toggle('msg')
        document.getElementById("internetstatus").children[0].textContent="You don't have access to this page. Request administrator";
        document.getElementById("internetstatus-box").style.display="flex"
        setTimeout(function () { 
          document.getElementById("internetstatus").classList.remove('msg')
          document.getElementById("internetstatus-box").classList.remove('msg')
          document.getElementById("internetstatus").children[0].textContent="You are online";
          document.getElementById("internetstatus-box").style.display="flex"
                 window.location="all-users.html";
        udecide ="";

         },5000);

      }
      document.getElementById("sidebar").innerHTML = umenu;
      document.getElementById("profileimage").src = localStorage.getItem("loggedpic");
      document.getElementById("profileimage1").src = localStorage.getItem("loggedpic");
      document.getElementById("mname").innerHTML = localStorage.getItem("loggedname");
      }
    
console.log(path)
    var a = document.getElementById("sidebar").querySelectorAll("a");
a.forEach(i =>{
  var href = i.href;
  if(path=="/f&r/"){
    path = "/f&r/index"
  }

  console.log(href)
  if(!path.includes(".html")){
    path = path+".html";
  }
  if (href.includes(path)){
    i.parentElement.className="active";
    if (i.children.length==0){
        i.parentElement.parentElement.parentElement.classList.toggle('show')
    }
  }

})

 }

sidebari()

function alllogout(){
 // updatelogstatus2("Offline");  
  localStorage.removeItem("loggedname")
localStorage.removeItem("loggeduserdetails");
 localStorage.removeItem("loggeduorp");
 localStorage.removeItem("loggedpic");
 localStorage.removeItem("loggedmail");
  window.location="../logout.html";
}
function alllogoutPopup(){
  console.log("ok")
  var opt = document.getElementById("popup-3").children[1].children[3].children[1];
document.getElementById("popup-3").classList.toggle("active");
opt.setAttribute("onclick","alllogout()")
console.log(opt)

}
const  GetUniqueID1 = () =>{
  const uniqueID = localStorage.getItem("Passkey-uniqueID");
  if (uniqueID == undefined){
  const newUniqueID = crypto.randomUUID();
  
  return newUniqueID;
  }
  else {
  return uniqueID;
  }
  }
async function passkey1(){
  ustatus="Going";
  document.getElementById("loader").style.display="block"; 
           document.getElementById("load").style.display="initial";
           document.getElementById("message").textContent="Checking....";
  var passkeysss ={};
  var fetchurl = "https://passkey-5ev6.onrender.com";
  const url = new URL(window.location)
  var weburl = location.hostname;
           var passdevuniid =GetUniqueID1();
           var rid  = localStorage.getItem("loggeduserdetails");
           var username = JSON.parse(rid).id;
           const name = localStorage.getItem("loggedname");
           console.log(passdevuniid);
           const response = await fetch(fetchurl+'/check-pasakey', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ weburl, username,devUniId:passdevuniid  })
           })

           const passkeycheck = await response.json()
           console.log(passkeycheck)
           const { no } = passkeycheck// Server side challenge
if (no ==  0){
 document.getElementById("loader").style.display="block"; 
           document.getElementById("load").style.display="initial";
           document.getElementById("message").textContent="Registering PassKey....";
         

       const { startRegistration, startAuthentication } = SimpleWebAuthnBrowser;

           console.log(weburl)
           const response = await fetch(fetchurl+'/register-challenge', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ username, weburl, name })
           })

           const challengeResult = await response.json()
           const { options } = challengeResult // Server side challenge

           const authenticationResult = await startRegistration({optionsJSON: options})
           console.log(authenticationResult)

           var urlorigin= location.protocol+"//"+location.host;
           console.log(urlorigin)
           var create_passkey = await fetch(fetchurl+'/register-verify', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ username, cred: authenticationResult, challenge: options.challenge, devUniId:passdevuniid[0], weburl,urlorigin })
           })
           const create_passkeyResult = await create_passkey.json();
           console.log(create_passkeyResult.result)
           
           
passkeysss = create_passkeyResult.info;
console.log(create_passkeyResult.info);
if (create_passkeyResult.info.userVerified){
 localStorage.setItem("Passkey-uniqueID",passdevuniid[0]);
 document.getElementById("loader").style.display="none"; 
document.getElementById("message").textContent="PassKey Registered Successfully";
setTimeout(function () { 
 document.getElementById("load").style.display="none";
 ustatus="";
},2000);
}


}
else{
  document.getElementById("loader").style.display="none"; 
document.getElementById("message").textContent="PassKey is already created for this Device";
setTimeout(function () { 
 document.getElementById("load").style.display="none";
 ustatus="";
},2000);
//alert("PassKey is already created for this Device")
}
}


/*function updatelogstatus2(status){
var rid  = localStorage.getItem("loggeduserdetails");
var uid = JSON.parse(rid).id;
var updatestring = uid+"/"+status;
console.log(updatestring)
 
fetch(

"https://script.google.com/macros/s/AKfycbxEoNGPxEXxwtSXqRvPhgGK_btTmbVO4Tq6ZW002Q7Olap6cyoi5hmNAwYTS3OfLJCLug/exec",
{
redirect: "follow",
method: "POST",
body: updatestring,
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
throw new Error("Failed to fetch.");
}
})
.then(async function (data) {
const result1 = await data.json();

var r = result1.data2;


})

.catch(function (error) {
// Handle errors, you can display an error message here
console.error(error);
updatelogstatus2(status);
});
}


setTimeout(() => {

updatelogstatus2("Online");

}, 2000)
window.addEventListener("blur", () => {
updatelogstatus2("Offline");   
});
window.addEventListener("focus", () => {
updatelogstatus2("Online");   
});
//window.unblur = colse();
const beforeUnloadHandler = (event) => {  
updatelogstatus2("Offline");  
};
window.addEventListener("beforeunload", beforeUnloadHandler);*/
