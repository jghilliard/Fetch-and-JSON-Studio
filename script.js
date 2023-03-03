// TODO: add code here
let astronautList;

window.addEventListener("load", function() {
    //let astronautList;

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            //console.log(json);
            astronautList = json;

     let cont = document.getElementById("container");
     //console.log("Second Try: " + astronautList);

     for (astronaut of json){
        let astro = document.createElement('div');
        astro.classList.add("astronaut");
        astro.innerHTML = `<div class="bio">
        <h3>${astronaut.firstName}</h3>
        <ul>
           <li>${astronaut.hoursInSpace}</li>
           <li>${astronaut.active}</li>
           <li>${astronaut.skills}</li>
        </ul>
     </div>
     <img class="avatar" src= ${astronaut.picture}>`;

     cont.appendChild(astro);
     }
    })

    console.log("Test " + astronautList);
});
