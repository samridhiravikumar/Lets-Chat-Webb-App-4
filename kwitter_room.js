var firebaseConfig = {
  apiKey: "AIzaSyCZzHKQ-96CV56QKQY5GWfRg6FRpX6PcDQ",
  authDomain: "lets-chat-web-app-61c13.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-61c13-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-61c13",
  storageBucket: "lets-chat-web-app-61c13.appspot.com",
  messagingSenderId: "576381287618",
  appId: "1:576381287618:web:fd0578810281720ccb0f5b",
  measurementId: "G-9C4C4D55RP"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
 }

 function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function Logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }

