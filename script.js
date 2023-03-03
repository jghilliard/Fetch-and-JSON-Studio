// TODO: add code here
let astronautList = [];

window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(response => response.json())
        .then(data => {
            astronautList = data;
        })
        .then(() => {
            console.log("First Try: " + astronautList);
        });

     let cont = document.getElementById("container");
     console.log("Second Try: " + astronautList);

     for (let i = 0; i < astronautList.length; i++){
        let astronaut = document.createElement('div');
        astronaut.classList.add("astronaut");
        astronaut.innerHTML = `<div class="bio">
        <h3>${json.firstName} $</h3>
        <ul>
           <li>${json.hoursInSpace}</li>
           <li>${json.active}</li>
           <li>${json.skills}</li>
        </ul>
     </div>
     <img class="avatar" src= ${i.picture}>`

     cont.appendChild(astronaut);
     }
});
