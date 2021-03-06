## Book IT

- [General info](#general-info)
- [Technologies](#technologies)
- [Contents](#content)

## General Info

This browser based web application to ...

Book It is an event booking application. With Book It,  users will be able to book sporting events at local recreational centers. users can save their bookings, preview what sports are available, and cancel their bookings.Our MVP has also filled the CRUD requirements by making the web app able to store booked data, read events, update booked events, and delete booked events. 

- Hello, my name is Nicky. I'm excited about the project because I like to work on apps. (coder)
- Hi my name is Kai . I am excited about this project because is helpful! (project manager)
- Hi my name is Al. I am excited about this project because I love working in groups! (desinger)

## Technologies

Technologies used for this project:

- HTML, CSS
- JavaScript
- Bootstrap
- Firebase   

## Content

Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url. --> this needs
├──README.md
├── images
├── html
├── scripts
├── styles

### index.html is outside the html folder in order for the the deployed application to be functional 

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── html                     # Folder for html
    /badminton_preview.html
    /basketball_preview.html
    /boxing_preview.html
    /confirmation.html
    /events_page.html
    /help.html
    /index.html
    /login_page.html
    /skeleton.html
    /login_page.html        
    /volleyball_preview.html
    /yoga_preview.html
    /currently_booked.html


├── images                   # Folder for images
    /index_SS.png
    /login_SS.png
    /events_SS.png
    /badpreview_SS.png
    /confirm_SS.png
    /Boxing.jpg
    /Volleyball.jpg
    /Yoga.jpg
    /Boxing.jpg
    /Basketball.jpg
                    #
├── scripts                  # Folder for scripts
    /badminton.js
    /basketball.js
    /booking.js
    /boxing.js
    /confirm.js
    /events.js
    /firebaseAPI.js
    /login.js
    /volleyball.js
    /yoga.js
                 
├── styles                   # Folder for styles
    /badminton_style.css
    /basketball_style.css
    /boxing_style.css
    /confirmation.css
    /currently_booked_style.css
    /events_style.css
    /help_styl.css
    /landing_style.css
    /skeleton.css
    /login_page.html        
    /volleyball_style.css
    /yoga_style.css

Firebase hosting files:
├── .firebaserc
├── .firebase.json
├── .firebase.indexes.json
├── .firebase.rules
├── .storage.rules
├── 404.html




```


## image sources :

badminton photo: https://t4.ftcdn.net/jpg/03/08/07/57/240_F_308075782_n2CmkdBKAqF956PUbTKhIg8D2yTws1iW.jpg
boxing photo https://t4.ftcdn.net/jpg/01/84/47/23/360_F_184472311_SsM63mVSnlJ2BDlKY4CrSkj45vwX0ofJ.jpg
basketball photo: https://media.istockphoto.com/photos/basketball-picture-id959080376?k=20&m=959080376&s=612x612&w=0&h=qekj8Q8B6faam_E7gnFzaK8RnK-bvicEqV9xHHh_oGM=
yoga photo: https://t4.ftcdn.net/jpg/03/02/02/87/360_F_302028765_gsJIkiJSeHQ2ltZGvytuTmsmgTPCshCP.jpg
dance photo: https://st.depositphotos.com/1825047/4138/i/600/depositphotos_41388073-stock-photo-the-dancer.jpg
volleyball photo https://media.istockphoto.com/photos/volleyball-in-an-empty-gym-picture-id171247618?k=20&m=171247618&s=612x612&w=0&h=A6RLdEUY7OCuN1WKYkVyWUaUlXVn-78oSnwrKbC8LqE=
table tennis: https://media.istockphoto.com/photos/ping-pong-or-table-tennis-background-with-rackets-picture-id503250996?k=20&m=503250996&s=612x612&w=0&h=tMaVlByxg1uq8XNBN8bJoid8Bed_tXfgAkold6fmy0w=


## References:
Used Firebase API 

var firebaseConfig = {
  apiKey: "AIzaSyBrHYgVBtlG1z7cyEjZIv8aPiiWIgWifo4",
  authDomain: "book-it-5ab7c.firebaseapp.com",
  projectId: "book-it-5ab7c",
  storageBucket: "book-it-5ab7c.appspot.com",
  messagingSenderId: "320719821616",
  appId: "1:320719821616:web:e34f7b28198b12082e86f5",
  measurementId: "G-4ZD4YVV5F1"
};
  


Ammar, A., Et alOn Behalf Of The Eclb-Covid Consortium (2020). COVID-19 Home Confinement Negatively Impacts Social Participation and Life Satisfaction: A Worldwide Multicenter Study. International journal of environmental research and public health, 17(17), 6237. https://doi.org/10.3390/ijerph17176237


Lavie, C. J., Ozemek, C., Carbone, S., Katzmarzyk, P. T., & Blair, S. N. (2019). Sedentary Behavior, Exercise, and Cardiovascular Health. Circulation research, 124(5), 799–815. https://doi.org/10.1161/CIRCRESAHA.118.312669


Xiao, H., Zhang, Y., Kong, D., Li, S., & Yang, N. (2020). Social Capital and Sleep Quality in Individuals Who Self-Isolated for 14 Days During the Coronavirus Disease 2019 (COVID-19) Outbreak in January 2020 in China. Medical science monitor : international medical journal of experimental and clinical research, 26, e923921. https://doi.org/10.12659/MSM.923921