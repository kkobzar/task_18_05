import events from "./events/EVENTS_API.js";
$(document).ready(() => {
    const MONTH_COUNT = 6;
    const calendarContainer = $('#calendar-container')
    //generate calendar blocks
    for (let i = 0; i < MONTH_COUNT; i++){
        const eventsByMonth = getEventsByMonth(new Date().setMonth(new Date().getMonth() + i))
        let calendarEvents = []
        for (let event of eventsByMonth){
            calendarEvents.push({
                startDate: new Date(event.time).toISOString(),
                endDate: new Date(new Date(event.time).getTime() + 3600).toDateString(),
                summary: event.details
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
})

function getEventsByMonth(date = new Date()) {
    if (date instanceof Date){
        return events.filter(i => new Date(i.time).getMonth() === date.getMonth())
    }else {
        return events.filter(i => new Date(i.time).getMonth() === new Date(date).getMonth())
    }
}
