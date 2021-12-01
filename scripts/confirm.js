function displayTempData() {
    let tempCardTemplate = document.getElementById("tempCardTemplate");
    let tempCardGroup = document.getElementById("tempCardGroup");

    db.collection("temp_data").get()
        .then(allTemp => {
            allTemp.forEach(doc => {
                var sportID = doc.data().code; //gets the unique ID field
                var sportName = doc.data().name;
                var monloc = doc.data().location;
                var moncity = doc.data().city;
                var monlength = doc.data().time;
                var monspots = doc.data().spots;
                var monprice = doc.data().price;
                var mondate = doc.data().date;


                let testTempCard = tempCardTemplate.content.cloneNode(true);
                testTempCard.querySelector('.card-title').innerHTML = sportName;
                testTempCard.querySelector('.card-monlength').innerHTML = monlength;
                testTempCard.querySelector('.card-moncity').innerHTML = moncity;
                testTempCard.querySelector('.card-mondate').innerHTML = mondate;
                testTempCard.querySelector('.card-monloc').innerHTML = monloc;
                testTempCard.querySelector('img').src = `./images/${sportName}.jpg`;
                tempCardGroup.appendChild(testTempCard);
            })

        })
}

    var del = document.getElementById("display")
    
    function deleteData() {
        db.collection("temp_data").doc("temp").delete();
        db.collection("temp_data").doc("temp").delete().then(() => {
            location.href = "currently_booked.html"
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


displayTempData();
