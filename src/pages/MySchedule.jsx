import {useMainContext} from "../Context/MainContextProvider.jsx";
import {getClassesAndLabDetails} from "../utils/class-details.js";
import {addMinutes, parse, format} from "date-fns";
import {useEffect, useState} from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Define fixed time periods (1 hour 15 minutes per slot)
const TIME_INTERVAL = 90; // in minutes
const START_TIME = "08:00"; // Start of the day
const END_TIME = "20:00"; // End of the day

/**
 * Generates time slots with a fixed interval
 */
const generateTimeSlots = (timeInterval) => {
    let slots = [];
    let currentTime = parse(START_TIME, "HH:mm", new Date());

    while (format(currentTime, "HH:mm") < END_TIME) {
        let nextTime = addMinutes(currentTime, timeInterval || TIME_INTERVAL);
        slots.push({
            startTime: format(currentTime, "HH:mm"),
            endTime: format(nextTime, "HH:mm")
        });
        currentTime = nextTime;
    }
    return slots;
};


/**
 * Determines if a class should occupy a time slot
 */
const isClassInTimeSlot = (classSlot, slotStart, slotEnd) => {
    return (
        classSlot.startTime < slotEnd && classSlot.endTime > slotStart
    );
};

const TimeTable = () => {
    const {currentSchedule, classes} = useMainContext();
    const schedules = getClassesAndLabDetails(classes, currentSchedule.selections);
    const [timeFilter, setTimeFilter] = useState({
        timeInterval: TIME_INTERVAL
    });
    const [timeSlots, setTimeSlots] = useState(generateTimeSlots());
    useEffect(() => {
        setTimeSlots(generateTimeSlots(timeFilter.timeInterval));
    }, [timeFilter]);
    const handleTimeIntervalChange = (e) => {
        setTimeFilter({
            timeInterval: e.target.value
        });
    }
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold">Class Schedule</h2>
                <select className="border border-gray-300 rounded p-2"
                        value={timeFilter.timeInterval}
                        onChange={(e) => setTimeFilter({...timeFilter, timeInterval: e.target.value})}
                >
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>1 Hour</option>
                    <option value={75}>1 Hour 15 Minutes</option>
                    <option value={90}>1 Hour 30 Minutes</option>
                    <option value={120}>2 Hours</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-2 bg-gray-100">Day</th>
                        {timeSlots.map((slot, index) => (
                            <th key={index} className="border border-gray-300 p-2 bg-gray-100">
                                {format(parse(slot.startTime, "HH:mm", new Date()), "h:mm a")}
                                <br/>
                                {format(parse(slot.endTime, "HH:mm", new Date()), "h:mm a")}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {daysOfWeek.map((day, dayIndex) => (
                        <tr key={dayIndex}>
                            <td className="border border-gray-300 p-2 bg-gray-50">{day}</td>
                            {timeSlots.map((slot, timeIndex) => {
                                const classData = schedules.find(({timeSlots, lab}) =>
                                    [...timeSlots, ...(lab?.timeSlots || [])].some(
                                        ts =>
                                            ts.dayOfWeek === dayIndex &&
                                            isClassInTimeSlot(ts, slot.startTime, slot.endTime)
                                    )
                                );
                                return (
                                    <td
                                        key={timeIndex}
                                        className="border border-gray-300 p-2 text-center min-w-[100px]"
                                    >
                                        {classData ? (
                                            <div className="bg-blue-500 text-white rounded p-1 text-xs">
                                                {classData.name}
                                                <br/>
                                                ({classData.professor})
                                                <br/>
                                                {classData.timeSlots
                                                    .filter(
                                                        ({dayOfWeek}) => dayOfWeek === dayIndex
                                                    )
                                                    .map(({startTime, endTime}, index) => (
                                                        <div key={index}>
                                                            {startTime} - {endTime}
                                                        </div>
                                                    ))}
                                            </div>
                                        ) : null}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TimeTable;
