let addEvent = false;

document.addEventListener('DOMContentLoaded', function(e){
    const eventsURL = "http://localhost:3000/events"

    const addBtn = document.querySelector("#new-event-btn");
    const eventFormContainer = document.querySelector(".form");
    addBtn.addEventListener("click", () => {
    // hide & seek with the form
        addEvent = !addEvent;
            if (addEvent) {
                eventFormContainer.style.display = "block";
            } else {
                eventFormContainer.style.display = "none";
        }
    });

    function renderEvents() {
        fetch(eventsURL)
        .then(response => response.json())
        .then(data =>{
            eventsList(data)
    })
    }

    function eventsList(events) {
        const eventsH1 = document.querySelector("body > h3")
        events.forEach(obj => {
            const eventP = document.createElement('h3')
            const eventContent = document.createElement('p')
            eventP.innerText = `${obj.title}  ${obj.date}`
            eventContent.innerText = obj.content
            eventP.append(eventContent)

            obj.current_users.forEach(eUser => {
                const eventUl = document.createElement('ul')
                const user = document.createElement('li') 
                
                user.innerText = eUser.username
                eventUl.append(user)

                eventP.append(eventUl)

                eventsH1.append(eventP)
        });

        const addUserToEventForm = document.createElement('form')
            addUserToEventForm.innerHTML = `
                <label style="color:blue">Attend This Event</label></br> 
                <label style="color:blue">Username: </label>
                <input stype="text name="Username">
                <label style="color:blue">Name: </label>
                <input type="text name="Name">
                <input type="submit" value="RSVP">
                `
                eventP.append(addUserToEventForm)
    })
}


        renderEvents()
})
