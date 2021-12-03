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


                        var sportName = doc.data().name;
                        var sportID = doc.data()
                            .code;
                        var sportName = doc.data().name;
                        var monloc = doc.data().location;
                        var moncity = doc.data().city;
                        var monlength = doc.data().time;
                        var monspots = doc.data().spots;
                        var monprice = doc.data().price;
                        var mondate = doc.data().date;
                        console.log(sportID);

                        let testEventCard = eventCardTemplate.content.cloneNode(
                            true);

                        testEventCard.querySelector('.card-title').innerHTML =
                            sportName;
                        testEventCard.querySelector('.card-monlength')
                            .innerHTML = monlength;
                        testEventCard.querySelector('.card-moncity').innerHTML =
                            moncity + ", " + monloc;

                        testEventCard.querySelector('.card-mondate').innerHTML =
                            mondate;
                        // the code deletes the data according to the card the button is in
                        testEventCard.querySelector('a').onclick = () => currentUser.doc(sportID).delete().then(delayRefreshPage(1000)); // calls the delayRefreshPage function
                        
                        testEventCard.querySelector('img').src =
                            `./images/${sportName}.jpg`;
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