//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBoTdwA49A11zeyZcA2bReahGL5PVWncnM",
      authDomain: "kwitter-ad274.firebaseapp.com",
      databaseURL: "https://kwitter-ad274-default-rtdb.firebaseio.com",
      projectId: "kwitter-ad274",
      storageBucket: "kwitter-ad274.appspot.com",
      messagingSenderId: "1080264033588",
      appId: "1:1080264033588:web:eefd29b843c92e4393d161"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");
function Send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
      name:username,
      message: msg,
      like:0
      });
} 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
