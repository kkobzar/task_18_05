import events from "./events/EVENTS_API.js";
const MONTH_COUNT = 6;
$(document).ready(() => {
    generateCalendars()
    //generate new calendars if filter clicked
    $('.filter-link').click(e => {
        e.preventDefault()
        if ($(e.target).hasClass('filter-link')){
            $('.filter-link').removeClass('active')
            const filter = $(e.target).attr('data-filter')
            if (!events.EVENT_TYPES.includes(filter)){
                return
            }
            $(e.target).addClass('active')
            generateCalendars(filter)
        }
    })
})

function generateCalendars(filter = false) {
    const calendarContainer = $('#calendar-container')
    calendarContainer.empty()
    //generate calendar blocks
    for (let i = 0; i < MONTH_COUNT; i++){
        const eventsByMonth = getEvents(new Date().setMonth(new Date().getMonth() + i), filter)
        let calendarEvents = []
        //format events for simpleCalendar
        for (let event of eventsByMonth){
            const infoHtml = `<h5>${event.title}</h5><p>${event.details}</p><p>Location: ${event.location}</p>`
            calendarEvents.push({
                startDate: new Date(event.time).toISOString(),
                endDate: new Date(new Date(event.time).getTime() + 3600).toDateString(),
                summary: infoHtml
            })
        }
        calendarContainer.append(`<div id="calendar_${i}"></div>`)
        $(`#calendar_${i}`).simpleCalendar({
            onInit: e => {
                e.changeMonth(i)
            },
            disableEmptyDetails: true,
            events: calendarEvents
        })
    }
}

function getEvents(date = new Date(), filter = false) {
    if (filter && !events.EVENT_TYPES.includes(filter)){
        return false;
    }
    if (date instanceof Date){
        return events.events.filter(i => {
            return new Date(i.time).getMonth() === date.getMonth() && filter ? i.type === filter : true
        })
    }else {
        return events.events.filter(i => new Date(i.time).getMonth() === new Date(date).getMonth() && filter ? i.type === filter : true)
    }
}
