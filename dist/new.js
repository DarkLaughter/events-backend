document.addEventListener("DOMContentLoaded", ()=> {
    const eventsURL = "http://localhost:3000/events"
    const eventBody = document.querySelector("body > div.container.mx-auto.px-4.sm\\:px-8 > div > div.-mx-4.sm\\:-mx-8.px-4.sm\\:px-8.py-4.overflow-x-auto > div > table > thead")
    function renderEvents() {
        fetch(eventsURL)
        .then(response => response.json())
        .then(data =>{
            eventsList(data)
    })
    }

    function eventsList(events) {
        events.forEach(eventObj => {
            console.log(eventObj)
            eventBody.innerHTML  +=
            `<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-full h-full rounded-full"
                            src="https://www.hoopswallpapers.com/wallpapers/2016/nba-finals-2016-game7-wallpaper-preview.jpg"
                            alt="" />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            ${eventObj.title}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Brandon</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                ${eventObj.date}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span class="relative">Upcoming</span>
                </span>
            </td>
            </tr>`
     
        });

    }


    renderEvents()
})

