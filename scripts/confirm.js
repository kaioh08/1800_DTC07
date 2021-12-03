function displayTempData() {
    let tempCardTemplate = document.getElementById("tempCardTemplate");
    let tempCardGroup = document.getElementById("tempCardGroup");

    db.collection("temp_data").get()
        .then(allTemp => {
            allTemp.forEach(doc => {
                var sportID = doc.data().code; //gets the unique ID field
                var sportName = doc.data().name;  // gets the name of the sport 
                var monloc = doc.data().location;  // gets the location of the sport (venue)
                var moncity = doc.data().city;  // gets the city of the sport 
                var monlength = doc.data().time;  // gets the scheudled time of the sport 
                var monspots = doc.data().spots;  // gets the number of spots 
                var monprice = doc.data().price;  // gets the price of the sports
                var mondate = doc.data().date;  // gets the date of the sport 

                // reads the necessary data into the htlm page 
                let testTempCard = tempCardTemplate.content.cloneNode(true);
                testTempCard.querySelector('.card-title').innerHTML = sportName;
                testTempCard.querySelector('.card-monlength').innerHTML = monlength;
                testTempCard.querySelector('.card-moncity').innerHTML = moncity;
                testTempCard.querySelector('.card-mondate').innerHTML = mondate;
                testTempCard.querySelector('.card-monloc').innerHTML = monloc;
                testTempCard.querySelector('img').src = `./images/${sportName}.jpg`;
                tempCardGroup.appendChild(testTempCard);  // appends the next card to the child 
            })

        })
}

    // deletes the data after leaving the page     
    function deleteData() { 
        db.collection("temp_data").doc("temp").delete();
        db.collection("temp_data").doc("temp").delete().then(() => {
            location.href = "currently_booked.html"  // pressing the "go to my events" button deletes the temp_data collection and goes to the currently booked page 
            console.log("Document successfully deleted!"); // cues a message if the events is deletd
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


displayTempData();
