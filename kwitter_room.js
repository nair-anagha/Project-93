
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAr7RcLWaVTrMwsOkD8p1SKiSqG6Y18Um8",
      authDomain: "class-93-56d3d.firebaseapp.com",
      databaseURL: "https://class-93-56d3d-default-rtdb.firebaseio.com",
      projectId: "class-93-56d3d",
      storageBucket: "class-93-56d3d.appspot.com",
      messagingSenderId: "986654638096",
      appId: "1:986654638096:web:5f57ca9f669fe8aececa95"
    };
firebase.initializeApp(firebaseConfig)    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
