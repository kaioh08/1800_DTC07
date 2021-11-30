function addBoxThur() {
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
                            code: "box1",
                            name: "Boxing",
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

document.getElementById("book-mon-box").onclick = function () {
    var tempRef = db.collection("temp_data");
    tempRef.doc("test").set({
            code: "box1",
            name: "Boxing",
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
        location: "Delbrook Community Center",
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

function displayBoxing() {
    db.collection("Boxing").get()
        .then(allSpots => {
            allSpots.forEach(doc => {
                var sportName = doc.data().name; //gets the name field
                var sportID = doc.data().code;
                //gets the unique ID field
                //hange the badminton ode to class
                // var boxDate = doc.data().date // gest date
                // var boxSpot = doc.data().spots
                var boxID3 = doc.data().code3;
                var boxID4 = doc.data().code4;
                var boxID5 = doc.data().code5;
                var boxID6 = doc.data().code6;
                var boxID7 = doc.data().code7;
                var boxID8 = doc.data().code8;

                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;

                console.log(sportID);
                document.getElementById(sportID).innerText = sportName;
                document.getElementById(boxID3).innerText = monloc;
                document.getElementById(boxID4).innerText = moncity;
                document.getElementById(boxID5).innerText = monlength;
                document.getElementById(boxID6).innerText = monspots;
                document.getElementById(boxID7).innerText = monprice;



            })
        })
}


// writeBoxSpots();
// myFunction();
displayBoxing();

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
// function getMonday(n) {
//     n = new Date(n);
//     var day = n.getDay(),
//         diff = n.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
//     return new Date(n.setDate(diff));
// }
document.getElementById("testdate").innerText = m.toLocaleDateString("en-US", options);
document.getElementById("nextmonday").innerText = m.toLocaleDateString("en-US", options);
document.getElementById("nexttuesday").innerText = t.toLocaleDateString("en-US", options);
document.getElementById("nextwednesday").innerText = w.toLocaleDateString("en-US", options);
document.getElementById("nextthursday").innerText = th.toLocaleDateString("en-US", options);
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);

// function writeBadSpots2() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var badmintonsRef = db.collection("Badminton2");
//     badmintonsRef.add({
//         code: "bad12",
//     })
// }
// const d = new Date();
// d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 1) % 7);
// getElementById("keke").innerText = d;

// function writeDate() {
//     // const d2 = new Date();
//     // d2.setDate(d2.getDate() + ((7 - d2.getDay()) % 7 + 1) % 7);
//     var dateRef = db.collection("datest")
//     dateRef.add({
//         code = "date1",
//         date = d,
//         date2 = d2,
//     })
// }
// writeDate();
// writeBadSpots2();