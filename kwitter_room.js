function initializeApp() {

const firebaseConfig = {
      apiKey: "AIzaSyA4XuTsYxs8m0NCR8gbhRkyOsUZsIjOvfg",
      authDomain: "kwitter-59fc6.firebaseapp.com",
      databaseURL: "https://kwitter-59fc6-default-rtdb.firebaseio.com",
      projectId: "kwitter-59fc6",
      storageBucket: "kwitter-59fc6.appspot.com",
      messagingSenderId: "195843257005",
      appId: "1:195843257005:web:37ce55b0cfe1e6c5a5cc24"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name is"+ Room_names);
var row = "<div class='room_name' id = "+Room_names+" onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();
  var user_name = localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML="welcome"+ user_name;
 function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

 }
 function redirect_to_roomname(name){
       console.log(name); 
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html"
 }

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}