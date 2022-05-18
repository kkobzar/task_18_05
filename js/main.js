import events from "./events/EVENTS_API.js";
$(document).ready(async () => {
    const MONTH_COUNT = 6;
    const calendarContainer = $('#calendar-container')
    console.log(events)
    //generate calendar blocks
    for (let i = 0; i < MONTH_COUNT; i++){
        calendarContainer.append(`<div id="calendar_${i}"></div>`)
        $(`#calendar_${i}`).simpleCalendar({
            onInit: e => {
                e.changeMonth(i)
            }
        })
    }
})
