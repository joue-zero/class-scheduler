
import { format } from 'date-fns';
import {getClassDetails} from "../utils/class-details.js";


export function ScheduleDisplay({ schedule, classes, onSelect }) {


  const formatTime = (time) => {
    const date = new Date();
    const [hours, minutes] = time.split(':');
    date.setHours(parseInt(hours), parseInt(minutes));
    return format(date, 'h:mm a');
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {schedule.selections.map(selection => {
          const details = getClassDetails(
            classes,
            selection.classId,
            selection.versionId,
            selection.labId
          );
          
          if (!details) return null;

          return (
            <div key={`${selection.classId}-${selection.versionId}`} className="border-b pb-2">
              <h4 className="font-medium">
                {details.code}: {details.name}
              </h4>
              <p className="text-sm text-gray-600">Professor: {details.professor}</p>
              
              <div className="mt-1 space-y-1">
                {details.timeSlots.map((slot, index) => (
                  <p key={index} className="text-sm">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][slot.dayOfWeek]}{' '}
                    {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                  </p>
                ))}
                
                {details.lab && (
                  <div className="ml-4 mt-1">
                    <p className="text-sm font-medium">{details.lab.name}</p>
                    {details.lab.timeSlots.map((slot, index) => (
                      <p key={index} className="text-sm">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][slot.dayOfWeek]}{' '}
                        {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <button
        onClick={onSelect}
        className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Select This Schedule
      </button>
    </div>
  );
}