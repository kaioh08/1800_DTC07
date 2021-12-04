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
document.getElementById("nextfriday").innerText = f.toLocaleDateString("en-US", options);  //id with "nextfriday" replaces the html line with the date for next next friday
