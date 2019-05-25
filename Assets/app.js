



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAuBjnfK4ghJ6J80pJjcbWTxthYPKggU-A",
    authDomain: "train-scheduler-6a08c.firebaseapp.com",
    databaseURL: "https://train-scheduler-6a08c.firebaseio.com",
    projectId: "train-scheduler-6a08c",
    storageBucket: "train-scheduler-6a08c.appspot.com",
    messagingSenderId: "985191533131",
    appId: "1:985191533131:web:eb2070f9177945fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();



  $("#run-search").on('click', function(event){

    console.log("you clicked me")

    event.preventDefault();

        var newTrain = {

            name: $("#trainName").val().trim(),
            destination: $('#destination').val().trim(),
            firstTrain: $('#trainTime').val().trim(),
            frequency: $('#frequency').val().trim(),


        }
    database.ref().push(newTrain);
  
  
})


