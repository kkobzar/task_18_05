import events from "./events/EVENTS_API.js";
const MONTH_COUNT = 6;
$(document).ready(() => {
    generateCalendars()
    $('.filter-link').click(e => {
        e.preventDefault()
        if ($(e.target).hasClass('filter-link')){
            $('.filter-link').removeClass('active')
            const filter = $(e.target).attr('data-filter')
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
            calendarEvents.push({
                startDate: new Date(event.time).toISOString(),
                endDate: new Date(new Date(event.time).getTime() + 3600).toDateString(),
                summary: event.details + '\nLocation: ' + event.location
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
    if (date instanceof Date){
        return events.filter(i => {
            return new Date(i.time).getMonth() === date.getMonth() && filter ? i.type === filter : true
        })
    }else {
        return events.filter(i => new Date(i.time).getMonth() === new Date(date).getMonth() && filter ? i.type === filter : true)
    }
}
