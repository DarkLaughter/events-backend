document.addEventListener('DOMContentLoaded', function(e){
    const eventsURL = "http://localhost:3000/events"

    fetch(eventsURL)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
})
