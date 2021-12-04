function addYogaMon() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("yoga1").set({
                code: "yoga1",
                name: "Yoga",
                city: "Vancouver",
                date: "Monday Dec ",
                spots: "28/30",
                location: "The Yoga Bar",
                age: "All Ages",
                time: "6:30am - 8:30am",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "yoga1",
                    name: "Yoga",
                    city: "Vancouver",
                    date: "Monday, Dec 6",
                    spots: "0/30",
                    location: "The Yoga Bar",
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

function addYogaTues() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("yoga2").set({
                code: "yoga2",
                name: "Yoga",
                city: "Vancouver",
                date: "Tuesday, Dec 7",
                spots: "28/30",
                location: "Britannia Community Centre",
                age: "All Ages",
                time: "6:30am - 8:30am",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "yoga1",
                    name: "Yoga",
                    city: "Vancouver",
                    date: "Tuesday, Dec 7",
                    spots: "0/30",
                    location: "Britannia Community Centre",
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

function addYogaWeds() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("yoga3").set({
                code: "yoga3",
                name: "Yoga",
                city: "Vancouver",
                date: "Wednesday, Dec 8",
                spots: "0/30",
                location: "Coal Harbour Community Centre",
                age: "All Ages",
                time: "6:00pm - 8:00pm",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "yoga1",
                    name: "Yoga",
                    city: "Vancouver",
                    date: "Wednesday, Dec 8",
                    spots: "0/30",
                    location: "Coal Harbour Community Centre",
                    age: "All Ages",
                    time: "6:00pm - 8:00pm",
                    price: "5$",
                })

                .then(() => {
                    location.href = "confirmation.html";
                    console.log("does it write?");
                })
        } else {}
    });
}

function addYogaThurs() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.doc("yoga4").set({
                code: "yoga4",
                name: "Yoga",
                city: "Vancouver",
                date: "Thursday, Dec 9",
                spots: "28/30",
                location: "False Creek Community Centre",
                age: "All Ages",
                time: "6:30am - 8:30am",
                price: "5$",
            })
            var tempRef = db.collection("temp_data");
            tempRef.doc("temp").set({
                    code: "yoga1",
                    name: "Yoga",
                    city: "Vancouver",
                    date: "Thursday, Dec 9",
                    spots: "0/30",
                    location: "False Creek Community Centre",
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

function writeYogaSpots() {
    //define a variable for the collection you want to create in Firestore to populate data
    var yogaRef = db.collection("Yoga");
    yogaRef.add({
        code: "yoga1",
        name: "Yoga",
        code3: "monday3",
        code4: "monday4",
        code5: "monday5",
        code6: "monday6",
        code7: "monday7",
        city: "Vancouver",
        date: "Monday, Dec 6",
        spots: "28/30",
        location: "The Yoga Bar",
        age: "All Ages",
        time: "6:30am - 8:30am",
        price: "5$",
    });
    yogaRef.add({
        code: "yoga2",
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
    yogaRef.add({
        code: "yoga3",
        name: "",
        code3: "wednesday3",
        code4: "wednesday4",
        code5: "wednesday5",
        code6: "wednesday6",
        code7: "wednesday7",
        city: "Richmond",
        date: "Wednesday, Dec 8",
        spots: "10/30",
        location: "Coal Harbour Community Centre",
        age: "All Ages",
        time: "6:30am - 8:30am",
        price: "5$",

    });
    yogaRef.add({
        code: "yoga4",
        name: "",
        code3: "thursday3",
        code4: "thursday4",
        code5: "thursday5",
        code6: "thursday6",
        code7: "thursday7",
        city: "Vancouver",
        date: "Thursday, Dec 9",
        spots: "10/30",
        location: "False Creek Community Centre",
        age: "All Ages",
        time: "2 hours",
        price: "5$",

    });
    yogaRef.add({
        code: "yoga5",
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

function displayYoga() {
    db.collection("Yoga").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code; //gets the unique ID field
                var yogaID3 = doc.data().code3;
                var yogaID4 = doc.data().code4;
                var yogaID5 = doc.data().code5;
                var yogaID6 = doc.data().code6;
                var yogaID7 = doc.data().code7;

                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName;
                document.getElementById(yogaID3).innerText = monloc;
                document.getElementById(yogaID4).innerText = moncity;
                document.getElementById(yogaID5).innerText = monlength;
                document.getElementById(yogaID6).innerText = monspots;
                document.getElementById(yogaID7).innerText = monprice;



            })
        })
}


displayYoga();
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