document.addEventListener('DOMContentLoaded', function(e){
    const eventsURL = "http://localhost:3000/events"

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
    })
}


        renderEvents()
})
