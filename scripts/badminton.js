function addBadThur() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("bad1").set({
                code: "bad1",
                name: "Badminton",
                city: "Vancouver",
                date: "Monday, Dec 6",
                spots: "28/30",
                location: "Delbrook Community Center",
                age: "All Ages",
                time: "6:30am - 8:30am",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "bad1",
                    name: "Badminton",
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
                    console.log("doesi t write?");
                })
        } else {
            // No user is signed in.
        }
    });
}


function writeBadSpots() {
    //define a variable for the collection you want to create in Firestore to populate data
    var badmintonRef = db.collection("Badminton");
    badmintonRef.add({
        code: "bad1",
        name: "Badminton",
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
    badmintonRef.add({
        code: "bad2",
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
    badmintonRef.add({
        code: "bad3",
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
    badmintonRef.add({
        code: "bad4",
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
    badmintonRef.add({
        code: "bad5",
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

    // badmintonRef.add({
    //     code: "bad6",
    //     name: "",
    //     code2: "wednesday2",
    //     code3: "wednesday3",
    //     code4: "wednesday4",
    //     code5: "wednesday5",
    //     code6: "wednesday6",
    //     code7: "wednesday7",
    //     city: "Burnaby",
    //     date: "Wednesday, Dec 11",
    //     spots: "10/30",
    //     location: "Christine Sinclair Community Center",
    //     age: "All Ages",
    //     duration: "2 hours",
    //     price: "5$",

    // });

}

function displayBadminton() {
    db.collection("Badminton").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code;
                //gets the unique ID field
                //hange the badminton ode to class
                // var badDate = doc.data().date // gest date
                // var badSpot = doc.data().spots
                var badID3 = doc.data().code3;
                var badID4 = doc.data().code4;
                var badID5 = doc.data().code5;
                var badID6 = doc.data().code6;
                var badID7 = doc.data().code7;
                var badID8 = doc.data().code8;

                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName;
                document.getElementById(badID3).innerText = monloc;
                document.getElementById(badID4).innerText = moncity;
                document.getElementById(badID5).innerText = monlength;
                document.getElementById(badID6).innerText = monspots;
                document.getElementById(badID7).innerText = monprice;



            })
        })
}

// addBadThur();
// writeBadSpots();
// myFunction();
displayBadminton();

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