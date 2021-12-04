function addBoxMon() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("box1").set({  // writes new data to the collection savedSports
                code: "box1",  // event code
                name: "Boxing",  // sport name
                city: "Vancouver",  // city selected
                date: "Monday, Dec 6",  //date of event
                spots: "28/30",  // how many spots are left
                location: "Sugarray's Boxing Gym",  // where the event is taking place
                age: "All Ages",  // the age range of the event
                time: "6:30am - 8:30am",  // the duration of the event
                price: "5$",  // how much the event costs
            })
            var tempRef = db.collection("temp_data");  // writes to the temp_Data colection
            tempRef.doc("temp").set({  // makes a document called temp where the app reads it from the firebase
                    code: "box1",
                    name: "Boxing",
                    city: "Vancouver",
                    date: "Monday, Dec 6",
                    spots: "28/30",
                    location: "Sugarray's Boxing Gym",
                    age: "All Ages",
                    time: "6:30am - 8:30am",
                    price: "5$",
                })
                .then(() => {
                    location.href = "confirmation.html";  // redirects the users to the confirmation page 
                    console.log("does it write?");  // checks if the button works
                })
        } else {}
    });
}

function writeboxSpots() {
    //define a variable for the collection you want to create in Firestore to populate data
    var boxingRef = db.collection("Boxing");
    boxingRef.add({
        code: "box1",
        name: "Boxing",
        code3: "monday3",
        code4: "monday4",
        code5: "monday5",
        code6: "monday6",
        code7: "monday7",
        city: "Vancouver",
        date: "Monday, Dec 6",
        spots: "12/30",
        location: "Sugarray's Boxing Gym",
        age: "All Ages",
        time: "5:30am - 8:30am",
        price: "5$",
    });
    boxingRef.add({
        code: "box2",
        name: "",
        code3: "tuesday3",
        code4: "tuesday4",
        code5: "tuesday5",
        code6: "tuesday6",
        code7: "tuesday7",
        city: "Burnaby",
        date: "Tuesday, Dec 7",
        spots: "21/30",
        location: "Bonsor Community Center",
        age: "All Ages",
        time: "11:00am - 12:30am",
        price: "5$",
    });
    boxingRef.add({
        code: "box3",
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
        time: "7:00am - 8:30am",
        price: "5$",

    });
    boxingRef.add({
        code: "box4",
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
        time: "7:00pm - 8:30pm",
        price: "5$",

    });
    boxingRef.add({
        code: "box5",
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

function displayBoxing() {
    db.collection("Boxing").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code; //gets the unique ID field
                var boxID3 = doc.data().code3; 
                var boxID4 = doc.data().code4; 
                var boxID5 = doc.data().code5;
                var boxID6 = doc.data().code6; 
                var boxID7 = doc.data().code7; 

                var monloc = doc.data().location; // gets the location of event
                var moncity = doc.data().city;  // gets the city of event
                var monlength = doc.data().time; // gets the time of the event
                var monspots = doc.data().spots; // gets the available spots
                var monprice = doc.data().price; // gets the price of event

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName; // fills the id with sport name
                document.getElementById(boxID3).innerText = monloc; // fills the id with location
                document.getElementById(boxID4).innerText = moncity; // fills the id with city
                document.getElementById(boxID5).innerText = monlength; // fills the id with length
                document.getElementById(boxID6).innerText = monspots; // fills the id with spots
                document.getElementById(boxID7).innerText = monprice; // fills the id with price



            })
        })
}

displayBoxing();

var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
var m = new Date(); // algorithm that gets the next week's date
m.setDate(m.getDate() + ((7 - m.getDay()) % 7 + 1) % 7); // next week monday
const t = new Date();
t.setDate(t.getDate() + ((7 - t.getDay()) % 7 + 2) % 8); // next week tuesday
const w = new Date();
w.setDate(w.getDate() + ((7 - w.getDay()) % 7 + 3) % 9); // next week wednesday
const th = new Date();
th.setDate(th.getDate() + ((7 - th.getDay()) % 7 + 4) % 10); // next week thursday
const f = new Date();
f.setDate(f.getDate() + ((7 - f.getDay()) % 7 + 5) % 11); // next week friday 

document.getElementById("testdate").innerText = m.toLocaleDateString("en-US", options); // replaces the time according to the ID
document.getElementById("nextmonday").innerText = m.toLocaleDateString("en-US", options); // id with "nextmonday" replaces the html line with the date for next monday
document.getElementById("nexttuesday").innerText = t.toLocaleDateString("en-US", options); // id with "nexttuesday" replaces the html line with the date for next tuesday
document.getElementById("nextwednesday").innerText = w.toLocaleDateString("en-US", options); // id with "nextwednesday" replaces the html line with the date for next wednesday
document.getElementById("nextthursday").innerText = th.toLocaleDateString("en-US", options); // id with "nextthursday" replaces the html line with the date for next thursday
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);  //id with "nextfriday" replaces the html line with the date for next next friday;
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);
