// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("DOMContentLoaded", function(){
    const takeOff = document.getElementById("takeoff")
    const flightStatus = document.getElementById("flightStatus")
    const shuttleheight = document.getElementById("spaceShuttleHeight")
    const land = document.getElementById("landing")

    takeOff.addEventListener("click", function(){
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.textContent = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue"
            shuttleheight.textContent = 10000  ;

        }     
    });

    land.addEventListener("click",function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleheight.textContent = 0;

    });

    missionAbort.addEventListener("click",function(){
        alert("Confirm that you want to abort the mission.");
        flightStatus.textContent = "Mission Aborted";
        shuttleBackground.style.backgroundColor = "green";
        shuttleheight.textContent = 0;

    });

    up.addEventListener("click",function(){
        rocket.getBoundingClientRect()
        position = parseInt(rocket.bottom) += 10
        rocket.bottom = position + 'px'
        
        
    })
});