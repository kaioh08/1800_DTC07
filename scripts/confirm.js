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

                // testHikeCard.querySelector('a').onclick = () => setHikeData(hikeID);
                testTempCard.querySelector('img').src = `./images/${sportID}.jpg`;
                tempCardGroup.appendChild(testTempCard);
            })

        })
}
// document.getElementById("display").onclick = function(){
    // var del = document.getElementById("display").addEventListener("click", deleteData());
    var del = document.getElementById("display")
    
    // del.onclick=deleteData();
    // del.addEventListener("click", deleteData());
    function deleteData() {
        db.collection("temp_data").doc("test").delete();
        db.collection("temp_data").doc("test").delete().then(() => {
            location.href = "currently_booked.html"
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
// }

// .then(() => {
//     location.href = "confirmation.html";
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });;
// }
// document.getElementById("display").addEventListener("click", (e) =>{
//     e.stopPropagation();
//     let id = e.target.
// })



displayTempData();
// writeHikes();
// insertName();
// read_display_quote();
// deleteData();