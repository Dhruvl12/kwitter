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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
