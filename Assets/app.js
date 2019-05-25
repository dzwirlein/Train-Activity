



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



    $("#trainName").val("");
    $('#destination').val("");
    $('#trainTime').val("");
    $('#frequency').val("");
  
  
});

database.ref().on('child_added', function(childSnapshot){

    console.log(childSnapshot);

        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainFrequency = childSnapshot.val().frequency;
        var trainTime = moment(childSnapshot.val().firstTrain, 'HH:mm').format('hh:mm a');
        


        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFrequency);
        console.log(trainTime);




    var trainTimeConverted = moment(trainTime, "hh:mm a").subtract(1, "day");
    var currentTime = moment().format('hh:mm a');
    var diffTime = moment().diff(moment(trainTimeConverted), "minutes");
    var tRemainder = diffTime % trainFrequency;
    var minAway = trainFrequency - tRemainder;
    var nextTrain= moment().add(minAway, "minutes");
    var nextArrival = moment(nextTrain).format("hh:mm a");


    console.log(trainTimeConverted);
    console.log(currentTime);
    console.log(diffTime);
    console.log(tRemainder);
    console.log(minAway);
    console.log(nextTrain);
    console.log(nextArrival);

      

        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDestination),
            $("<td>").text(trainFrequency),
            $("<td>").text(nextArrival),
            $("<td>").text(minAway),
        
          );
        
          // Append the new row to the table
          $("#schedule-table > tbody").append(newRow);


        });

    
