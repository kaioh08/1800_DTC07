function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {                                              
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
            .then(userDoc => {
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                //method #1:  insert with html only
                //document.getElementById("name-goes-here").innerText = n;    //using javascript
                //method #2:  insert using jquery
                $("#name-goes-here").text(user_Name);                         //using jquery
            })
        } else {
            // No user is signed in.
        }
    });
}


function writeSports() {
//define a variable for the collection you want to create in Firestore to populate data
var sportsRef = db.collection("Available Sports");
sportsRef.add({
code: "bad1",
name: "Badminton",
city: "Vancouver, Burnaby",
spots: "25/30",
level: "HARD AF",
age: "0-1 yers old",
duraction: "2h 30min",
});
sportsRef.add({
code: "basket1",
name: "Basketball",
city: "Vancouver",
spots: "28/30",
level: "Casual",
age: "16+",
duraction: "2h 30min",
});
sportsRef.add({
code: "box1",
name: "Boxing",
city: "Vancouver",
spots: "18/30",
level: "Causal",
age: "16+",
duraction: "2h 30min",
});
sportsRef.add({
code: "volley1",
name: "Volleyball",
city: "Vancouver, Burnaby",
spots: "28/30",
level: "Casual",
age: "16+",
duraction: "2h 30min",
});
sportsRef.add({
code: "yoga1",
name: "Yoga and Meditation",
city: "Vancouver, Burnaby",
spots: "28/30",
level: "Casual",
age: "16+",
duraction: "2h 30min",
});
}
// writeSports();


function displaySports() {
   db.collection("Available Sports").get()
       .then(allSports => {
           allSports.forEach(doc => {
               var sportName = doc.data().name; //gets the name field
               var sportID = doc.data().code; //gets the unique ID field
               console.log(sportID);
               document.getElementById(sportID).innerText = sportName;
   })
   })
                }
displaySports();
insertName();