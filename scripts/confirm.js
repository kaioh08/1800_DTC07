function displayTempData() {
    let tempCardTemplate = document.getElementById("tempCardTemplate");
    let tempCardGroup = document.getElementById("tempCardGroup");

    db.collection("temp_data").get()  //gets the data from the temp_data collection and reads it in the confirmation.html page
        .then(allTemp => {
            allTemp.forEach(doc => {
                var sportName = doc.data().name;  // gets the name of the sport 
                var monloc = doc.data().location;  // gets the location of the sport (venue)
                var moncity = doc.data().city;  // gets the city of the sport 
                var monlength = doc.data().time;  // gets the scheudled time of the sport 
                var mondate = doc.data().date;  // gets the date of the sport 

                // reads the necessary data into the htlm page 
                let testTempCard = tempCardTemplate.content.cloneNode(true);
                testTempCard.querySelector('.card-title').innerHTML = sportName;  // the text with the id 'card-title' gets over written by the name of the sport
                testTempCard.querySelector('.card-monlength').innerHTML = monlength; // the text with the id 'card-monlength' gets over written by the duration of the event
                testTempCard.querySelector('.card-moncity').innerHTML = moncity; // the text with the id 'card-moncity' gets over written by the city of the event
                testTempCard.querySelector('.card-mondate').innerHTML = mondate; // the text with the id 'card-mondate' gets over written by the date of the event
                testTempCard.querySelector('.card-monloc').innerHTML = monloc;  // the text with the id 'card-monloc' gets over written by the location of the event 
                testTempCard.querySelector('img').src = `/images/${sportName}.jpg`;  // changes the images based on the name of the sports
                tempCardGroup.appendChild(testTempCard);  // appends the next card to the child 
            })

        })
}

    // deletes the data after leaving the page     
    function deleteData() { 
        db.collection("temp_data").doc("temp").delete();
        db.collection("temp_data").doc("temp").delete().then(() => {
            location.href = "currently_booked.html"  // pressing the "go to my events" button deletes the temp_data collection and goes to the currently booked page 
            console.log("Document successfully deleted!"); // cues a message if the events is deleted
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


displayTempData();  // reads the data from the temp data collection 
