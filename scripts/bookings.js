function displaystuff() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {

            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUserquery = currentUser.orderBy("code")
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

                        testEventCard.querySelector('a').onclick = () => currentUser.doc(sportID).delete().then(delayRefreshPage(1000));
                        
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
async function displaynewstuff() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid).collection("savedSports");
            currentUser.get()
            
            .then(userDoc => {
                userDoc.forEach(doc => {

            var sportID = doc.data()
            .code;
            currentUser.doc(sportID).delete();
            delayRefreshPage(1000);

                })
            })

        }

    })
    delayRefreshPage(1000);

}
function refreshPage() {
    //ensure reloading from server instead of cache
    location.reload(true);
}
function delayRefreshPage(mileSeconds) {
    window.setTimeout(refreshPage, mileSeconds);
}
displaystuff();