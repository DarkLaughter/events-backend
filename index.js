
document.addEventListener('DOMContentLoaded', function(e){
    let addEvent = false;
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
            const eventUl = document.createElement('ul')
            eventUl.dataset.id = obj.id
            eventP.innerText = `${obj.title}  ${obj.date}`
            eventContent.innerText = obj.content
            eventP.append(eventContent)
            
            if (obj.current_users !== null) {
                
                obj.current_users.forEach(eUser => {
                    const user = document.createElement('li') 
                    const deleteButton = document.createElement('button')
                    deleteButton.innerText = "disappear"
                    deleteButton.className = "delete-user"
                    
                    user.innerText = `${eUser.name}
                    Contact Info: ${eUser.contact}` 
                    user.append(deleteButton)
                    eventUl.append(user)    
                    eventP.append(eventUl)
                    
                    eventsH1.append(eventP)
                });
                
            
        const addUserToEventForm = document.createElement('form')
            addUserToEventForm.className = "user-submit"
            addUserToEventForm.innerHTML = `
                <label style="color:blue">Attend This Event</label></br> 
                <label style="color:blue">Name: </label>
                <input type="text" name="name" value="" class="input-text">
                <label style="color:blue">Contact: </label>
                <input type="text" name="contact"value="" class="input-text">
                <input  type="submit" value="RSVP">
                `
                eventP.append(addUserToEventForm)

            }    
    })
}
document.addEventListener('click', e => {
    if (e.target.className === "delete-user") {
        
        const deleteLi = e.target.parentNode
        const ul = deleteLi.parentNode
        ul.removeChild(deleteLi)
    }
})


document.addEventListener('submit', e => {
    e.preventDefault();

    if (e.target.className === "add-event-form") {
        const eventName = e.target.name.value 
        const eventDate = e.target.date.value
        const eContent = e.target.Content.value
        const eventsH1 = document.querySelector("body > h3")
        const eventP = document.createElement('h3')
        const eventContent = document.createElement('p')
        const eventUl = document.createElement('ul')

            eventP.innerText = `${eventName}  ${eventDate}`
            eventContent.innerText = eContent
            eventP.append(eventContent)
            eventP.append(eventUl)
            eventsH1.prepend(eventP)

            const addUserToEventForm = document.createElement('form')
            addUserToEventForm.className = "user-submit"
            addUserToEventForm.innerHTML = `
                <label style="color:blue">Attend This Event</label></br> 
                <label style="color:blue">Name: </label>
                <input type="text" name="name" value="" class="input-text">
                <label style="color:blue">Contact: </label>
                <input type="text" name="contact"value="" class="input-text">
                <input  type="submit" value="RSVP">
                `
                eventP.append(addUserToEventForm)




    //   fetch(`baseUrl/id`, {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //       "accept": "application/json"
    //     },
    //     body: JSON.stringify({ key: value })
    //   })
    //   .then(response => response.json())
    //   .then(var => {
    //     function(var)
    //   })

    }

    if (e.target.className === "user-submit" ) {
        const currentLi = (e.target.previousElementSibling)
        const name = e.target.name.value
        const contact = e.target.contact.value
        const eventId = e.target.previousElementSibling.dataset.id        
            const user = document.createElement('li') 
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = `<input  type="submit" value="Delete">`
            deleteButton.className = "delete-user"

            user.innerText = `${name}
            Contact Info: ${contact}` 
            user.append(deleteButton)
            currentLi.append(user)
    //   fetch(`${eventsURL}/${eventId}`, {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //       "accept": "application/json"
    //     },
    //     body: JSON.stringify({ 
    //         Current_user: {
    //             "name": name,
    //             "contact": contact, 
    //         }
    //     } )
    //   })
    //   .then(response => response.json())
    //   .then(obj => {
    //     console.log(obj)
    //   })

    }




    
})

        renderEvents()
})
