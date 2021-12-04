function addBadThur() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    var email = userDoc.data().email;
                    console.log(user_Name);
                    var currentUser = db.collection(email);
                    currentUser.add({
                            code: "vol1",
                            name: "Volleyball",
                            code3: "monday3",
                            code4: "monday4",
                            code5: "monday5",
                            code6: "monday6",
                            code7: "monday7",
                            city: "Vancouver",
                            date: "Monday, Dec 6",
                            spots: "28/30",
                            location: "Delbrook Community Center",
                            age: "All Ages",
                            time: "6:30am - 8:30am",
                            price: "5$",
                        })
                        .then(userDoc => {
                            console.log(email);
                        })

                    //method #1:  insert with html only
                    //document.getElementById("name-goes-here").innerText = n;    //using javascript
                    //method #2:  insert using jquery
                    $("#name-goes-here").text(user_Name); //using jquery

                })


        } else {
            // No user is signed in.
        }
    });
}


document.getElementById("book-mon-vol").onclick = function () {
    var tempRef = db.collection("temp_data");
    tempRef.doc("test").set({
            code: "vol1",
            name: "Volleyball",
            city: "Vancouver",
            date: "Monday, Dec 6",
            spots: "28/30",
            location: "Delbrook Community Center",
            age: "All Ages",
            time: "6:30am - 8:30am",
            price: "5$",
        })
        .then(() => {
            location.href = "confirmation.html";
            console.log("does it write?");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

};

function writevolSpots() {
    //define a variable for the collection you want to create in Firestore to populate data
    var basketballRef = db.collection("volleyball");
    basketballRef.add({
        code: "vol1",
        name: "Volleyball",
        code3: "monday3",
        code4: "monday4",
        code5: "monday5",
        code6: "monday6",
        code7: "monday7",
        city: "Vancouver",
        date: "Monday, Dec 6",
        spots: "28/30",
        location: "Delbrook Community Center",
        age: "All Ages",
        time: "6:30am - 8:30am",
        price: "5$",
    });
    basketballRef.add({
        code: "vol2",
        name: "",
        code3: "tuesday3",
        code4: "tuesday4",
        code5: "tuesday5",
        code6: "tuesday6",
        code7: "tuesday7",
        city: "Burnaby",
        date: "Tuesday, Dec 7",
        spots: "10/30",
        location: "Bonsor Community Center",
        age: "All Ages",
        time: "10:30am - 12:30am",
        price: "5$",
    });
    basketballRef.add({
        code: "vol3",
        name: "",
        code3: "wednesday3",
        code4: "wednesday4",
        code5: "wednesday5",
        code6: "wednesday6",
        code7: "wednesday7",
        city: "Richmond",
        date: "Wednesday, Dec 8",
        spots: "10/30",
        location: "South Arm Community Center",
        age: "All Ages",
        time: "6:30am - 8:30am",
        price: "5$",

    });
    basketballRef.add({
        code: "vol4",
        name: "",
        code3: "thursday3",
        code4: "thursday4",
        code5: "thursday5",
        code6: "thursday6",
        code7: "thursday7",
        city: "Vancouver",
        date: "Thursday, Dec 9",
        spots: "10/30",
        location: "Delbrooke Community Center",
        age: "All Ages",
        time: "2 hours",
        price: "5$",

    });
    basketballRef.add({
        code: "vol5",
        name: "",
        code3: "friday3",
        code4: "friday4",
        code5: "friday5",
        code6: "friday6",
        code7: "friday7",
        city: "Burnaby",
        date: "Friday, Dec 10",
        spots: "10/30",
        location: "Bonsor Community Center",
        age: "All Ages",
        time: "2 hours",
        price: "5$",
    });

}

function displayVolleyball() {
    db.collection("volleyball").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code; //gets the unique ID field
                var volID3 = doc.data().code3;
                var volID4 = doc.data().code4;
                var volID5 = doc.data().code5;
                var volID6 = doc.data().code6;
                var volID7 = doc.data().code7;
                var volID8 = doc.data().code8;

                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName;
                document.getElementById(volID3).innerText = monloc;
                document.getElementById(volID4).innerText = moncity;
                document.getElementById(volID5).innerText = monlength;
                document.getElementById(volID6).innerText = monspots;
                document.getElementById(volID7).innerText = monprice;



            })
        })
}


displayVolleyball();

var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
var m = new Date();
m.setDate(m.getDate() + ((7 - m.getDay()) % 7 + 1) % 7);
const t = new Date();
t.setDate(t.getDate() + ((7 - t.getDay()) % 7 + 2) % 8);
const w = new Date();
w.setDate(w.getDate() + ((7 - w.getDay()) % 7 + 3) % 9);
const th = new Date();
th.setDate(th.getDate() + ((7 - th.getDay()) % 7 + 4) % 10);
const f = new Date();
f.setDate(f.getDate() + ((7 - f.getDay()) % 7 + 5) % 11);

document.getElementById("testdate").innerText = m.toLocaleDateString("en-US", options);
document.getElementById("nextmonday").innerText = m.toLocaleDateString("en-US", options);
document.getElementById("nexttuesday").innerText = t.toLocaleDateString("en-US", options);
document.getElementById("nextwednesday").innerText = w.toLocaleDateString("en-US", options);
document.getElementById("nextthursday").innerText = th.toLocaleDateString("en-US", options);
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);
