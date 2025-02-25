import {useMainContext} from "../Context/MainContextProvider.jsx";
import {getClassesAndLabDetails} from "../utils/class-details.js";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set up moment as the localizer for the calendar
const localizer = momentLocalizer(moment);

// Function to convert schedule into event format
const formatScheduleToEvents = (classes, schedu) => {
    const schedule = getClassesAndLabDetails(classes, schedu);
    return schedule.flatMap((classItem) => {
        return classItem.timeSlots.map((slot) => ({
            title: `${classItem.name} (${classItem.professor})`, // Display class name and professor
            start: moment().day(slot.dayOfWeek).set({
                hour: parseInt(slot.startTime.split(":")[0], 10),
                minute: parseInt(slot.startTime.split(":")[1], 10),

            }).toDate(),
            end: moment().day(slot.dayOfWeek).set({
                hour: parseInt(slot.endTime.split(":")[0], 10),
                minute: parseInt(slot.endTime.split(":")[1], 10),
            }).toDate(),
            allDay: false,
        }));
    });
};

export default function MySchedule() {
    const {currentSchedule, classes} = useMainContext();
    // console.log(currentSchedule);
    const events = formatScheduleToEvents(classes, currentSchedule.selections);

    return (
        <div style={{ height: "80vh", padding: "20px" }}>
            <h2>Class Schedule</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["week"]}
                defaultView="week"
                step={15} // 15-minute intervals
                timeslots={4} // Show 1 hour at a time
                min={new Date(2024, 1, 1, 8, 0)} // Start at 8:00 AM
                max={new Date(2024, 1, 1, 20, 0)} // End at 8:00 PM
                style={{ height: "100%" }}
            />
        </div>
    );
}