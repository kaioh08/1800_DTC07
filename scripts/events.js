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
                    $("#name-goes-here").text(user_Name); //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}


function writeSports() { // writes sports in sport collection
    //define a variable for the collection you want to create in Firestore to populate data
    var sportsRef = db.collection("Available Sports");
    sportsRef.add({
        code: "bad1", // sport id
        name: "Badminton", // sport name
        city: "Vancouver, Burnaby", // available cities
    });
    sportsRef.add({
        code: "basket1",
        name: "Basketball",
        city: "Vancouver",
    });
    sportsRef.add({
        code: "box1",
        name: "Boxing",
        city: "Vancouver",
    });
    sportsRef.add({
        code: "volley1",
        name: "Volleyball",
        city: "Vancouver, Burnaby",
    });
    sportsRef.add({
        code: "yoga1",
        name: "Yoga and Meditation",
        city: "Vancouver, Burnaby",
    });
    sportsRef.add({
        code: "dance1",
        name: "Dance",
        city: "Vancouver, Burnaby",
    });
    sportsRef.add({
        code: "table1",
        name: "Table Tennis",
        city: "Vancouver, Burnaby, Richmond",
    });
}


function displaySports() { // displays data from the collection Available Sports
    db.collection("Available Sports").get()
        .then(allSports => {
            allSports.forEach(doc => { // gets data for each item in the collection
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code; //gets the unique ID field
                console.log(sportID);
                document.getElementById(sportID).innerText = sportName; //replaces html of the id with the sport name
            })
        })
}
displaySports();
insertName();