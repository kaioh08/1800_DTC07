function addBadThur() { // adds booking data
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports"); // the collection savedSports in the collection users
            currentUser.doc("bad1").set({ // writes new data to the collection savedSports
                code: "bad1", // event code
                name: "Badminton", // sport name
                city: "Vancouver", // city selected
                date: "Monday, Dec 6", //date of event
                spots: "28/30", // how many spots are left
                location: "Delbrook Community Center", // where the event is taking place
                age: "All Ages", // the age range of the event
                time: "6:30am - 8:30am", // the duration of the event
                price: "5$", // how much the event costs
            })
            var tempRef = db.collection("temp_data"); // Temporary data to be deleted after we confirmed the booking
            tempRef.doc("temp").set({ // writes new data to collection temp_data
                    code: "bad1", // values are same as savedSports collection
                    name: "Badminton",
                    city: "Vancouver",
                    date: "Monday, Dec 6",
                    spots: "28/30",
                    location: "Delbrook Community Center",
                    age: "All Ages",
                    time: "6:30am - 8:30am",
                    price: "5$",
                })
                .then(() => { // activate after collections are made
                    location.href = "confirmation.html"; // redirect to confirmation
                    console.log("doesi t write?");
                })
        } else {
            // No user is signed in.
        }
    });
}


function writeBadSpots() { // creates data to be displayed
    //define a variable for the collection you want to create in Firestore to populate data
    var badmintonRef = db.collection("Badminton"); // Collection for the sport
    badmintonRef.add({ // Writes new data to the sport collection
        code: "bad1", // event code
        name: "Badminton", // sport name
        code3: "monday3", // placeholder for city
        code4: "monday4", // placeholder for date
        code5: "monday5", // place holder for spots
        code6: "monday6", // placeholder for location
        code7: "monday7", // placeholder for age
        city: "Vancouver", // city of event
        date: "Monday, Dec 6", // date of event
        spots: "28/30", // how many spots are left
        location: "Delbrook Community Center", // location of event
        age: "All Ages", // the age range for ages
        time: "6:30am - 8:30am", // duration of event
        price: "5$", // how much the event costs
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


}

function displayBadminton() { // displays information for events
    db.collection("Badminton").get() // gets data from the badminton collection
        .then(allSpots => { 
            allSpots.forEach(doc => { //gets data for all events in the badminton collection
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code;
                //gets the unique ID field
                //hange the badminton ode to class
                // var badDate = doc.data().date // gest date
                // var badSpot = doc.data().spots
                var badID3 = doc.data().code3; // gets a placeholder for location
                var badID4 = doc.data().code4; // gets a placeholder for city
                var badID5 = doc.data().code5; // gets a placeholder for duration
                var badID6 = doc.data().code6; // gets a placeholder for spots
                var badID7 = doc.data().code7; // gets a place holder for price

                var monloc = doc.data().location; // gets the location of event
                var moncity = doc.data().city; // gets the city of event
                var monlength = doc.data().time; // gets the time of the event
                var monspots = doc.data().spots; // gets the available spots
                var monprice = doc.data().price; // gets the price of event

                document.getElementById(sportID).innerText = sportName; // fills the id with sport name
                document.getElementById(badID3).innerText = monloc; // fills the id with location
                document.getElementById(badID4).innerText = moncity; // fills the id with city
                document.getElementById(badID5).innerText = monlength; // fills the id with length
                document.getElementById(badID6).innerText = monspots; // fills the id with spots
                document.getElementById(badID7).innerText = monprice; // fills the id with price



            })
        })
}

// addBadThur();
// writeBadSpots();
// myFunction();
displayBadminton();

// get the next week dates function 

var options = { // gets the format of the date
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
var m = new Date();  // algorithm that gets the next week's date
m.setDate(m.getDate() + ((7 - m.getDay()) % 7 + 1) % 7);  // next week mondday
const t = new Date();
t.setDate(t.getDate() + ((7 - t.getDay()) % 7 + 2) % 8);  // next week tuesday
const w = new Date();
w.setDate(w.getDate() + ((7 - w.getDay()) % 7 + 3) % 9);  // next week wednesday
const th = new Date();
th.setDate(th.getDate() + ((7 - th.getDay()) % 7 + 4) % 10);  // next week thursday
const f = new Date();
f.setDate(f.getDate() + ((7 - f.getDay()) % 7 + 5) % 11);  // next week friday 

document.getElementById("testdate").innerText = m.toLocaleDateString("en-US", options);  // replaces the time according to the ID
document.getElementById("nextmonday").innerText = m.toLocaleDateString("en-US", options);
document.getElementById("nexttuesday").innerText = t.toLocaleDateString("en-US", options);
document.getElementById("nextwednesday").innerText = w.toLocaleDateString("en-US", options);
document.getElementById("nextthursday").innerText = th.toLocaleDateString("en-US", options);
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);