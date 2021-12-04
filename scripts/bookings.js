function displaystuff() {
    firebase.auth().onAuthStateChanged(user => {  // checks if the use is logged in 
        if (user) {

            currentUser = db.collection("users").doc(user.uid).collection("savedSports"); // stores a variable according to "savedSports" collection under the user 
            currentUserquery = currentUser.orderBy("code")  // queries the data by the code value 
            currentUserquery.get()
                .then(userDoc => {
                    let eventCardTemplate = document.getElementById("eventCardTemplate");
                    let eventCardGroup = document.getElementById("eventCardGroup");
                    userDoc.forEach(doc => {


                        var sportName = doc.data().name; // gets the name of the sport
                        var sportID = doc.data()
                            .code;  // gets the code of the event (this is what is used to query data)
                        var sportName = doc.data().name;
                        var monloc = doc.data().location;  // gets the location of event
                        var moncity = doc.data().city;  // gets the city of event
                        var monlength = doc.data().time;  // gets the time of the event
                        var mondate = doc.data().date; // gets the date of the event

                        let testEventCard = eventCardTemplate.content.cloneNode(
                            true);

                        testEventCard.querySelector('.card-title').innerHTML =
                            sportName;  // the text with card-title gets over written by the name of the sport
                        testEventCard.querySelector('.card-monlength')
                            .innerHTML = monlength;  // the text with card-monlength gets over written by the length of the event 
                        testEventCard.querySelector('.card-moncity').innerHTML =
                            moncity + ", " + monloc;  // the text with card-moncity gets over written by the city of the event 

                        testEventCard.querySelector('.card-mondate').innerHTML =
                            mondate;  // the text with card-mondate gets over written by date of the event 
                        // the code deletes the data according to the card the button is in
                        testEventCard.querySelector('a').onclick = () => currentUser.doc(sportID).delete().then(delayRefreshPage(1000)); // calls the delayRefreshPage function
                        
                        testEventCard.querySelector('img').src =
                            `/images/${sportName}.jpg`;
                        eventCardGroup.appendChild(testEventCard);
                    })


                })
        } else {
            // No user is signed in.
        }
    });
}

function refreshPage() {
    //ensure reloading from server instead of cache
    location.reload(true); // resfreshed the page 
}
function delayRefreshPage(mileSeconds) {
    window.setTimeout(refreshPage, mileSeconds); // sets a timer, and refreshes the page after a set number of miliseconds. 
}
displaystuff();