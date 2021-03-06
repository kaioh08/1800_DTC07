function addBasMon() { // adds temporary data
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        // Makes the button under monday save the sports to the confirmation page // temp_data collection 
        // the button also makes the data saved under the collection unique to the user ID
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("bas1").set({ // creates new document in savedSports
                code: "bas1",
                name: "Basketball",
                city: "Vancouver",
                date: "Monday, Dec 6",
                spots: "20/30",
                location: "Delbrook Community Center",
                age: "All Ages",
                time: "6:30am - 8:30am",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "bas1",
                    name: "Basketball",
                    city: "Vancouver",
                    date: "Monday, Dec 6",
                    spots: "20/30",
                    location: "Delbrook Community Center",
                    age: "All Ages",
                    time: "6:30am - 8:30am",
                    price: "5$",
                })
                .then(() => {
                    location.href = "confirmation.html";
                    console.log("does it write?");
                })
        } else {}
    });
}

function writebasSpots() { // adds data to be displayed
    //define a variable for the collection you want to create in Firestore to populate data
    var basketballRef = db.collection("Basketball");
    basketballRef.add({ // adds data to Basketball
        code: "bas1",
        name: "Basketball",
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
        code: "bas2",
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
        code: "bas3",
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
        code: "bas4",
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
        code: "bas5",
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

function displayBasketball() { // displays data from basketball
    db.collection("Basketball").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code; //gets the unique ID field
                var basID3 = doc.data().code3;
                var basID4 = doc.data().code4;
                var basID5 = doc.data().code5;
                var basID6 = doc.data().code6;
                var basID7 = doc.data().code7;

                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName;
                document.getElementById(basID3).innerText = monloc;
                document.getElementById(basID4).innerText = moncity;
                document.getElementById(basID5).innerText = monlength;
                document.getElementById(basID6).innerText = monspots;
                document.getElementById(basID7).innerText = monprice;



            })
        })
}

displayBasketball();

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