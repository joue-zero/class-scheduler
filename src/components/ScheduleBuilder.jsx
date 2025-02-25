import  { useState } from 'react';
import { generatePossibleSchedules } from '../utils/scheduleGenerator';
import { ScheduleDisplay } from './ScheduleDisplay.jsx';


export default function ScheduleBuilder({ classes, onScheduleChange }) {
  const [possibleSchedules, setPossibleSchedules] = useState([]);
  const [showingPossibilities, setShowingPossibilities] = useState(false);
  const [filters, setFilters] = useState({
    sameDays: false,
    labsOnSameDays: false,
    maxDays: undefined,
    specificDays: undefined
  });

  const generateSchedules = () => {
    const schedules = generatePossibleSchedules(classes, filters);
    setPossibleSchedules(schedules);
    setShowingPossibilities(true);
  };

  const selectSchedule = (schedule) => {
    onScheduleChange(schedule);
    setShowingPossibilities(false);
  };

  if (showingPossibilities) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">
            Possible Schedules ({possibleSchedules.length})
          </h3>
          <button
            onClick={() => setShowingPossibilities(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            Back to Builder
          </button>
        </div>

        {/*// Filters */}

        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h4 className="font-medium">Filters</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.sameDays}
                onChange={(e) => setFilters({ ...filters, sameDays: e.target.checked })}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span>Classes on same days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.labsOnSameDays}
                onChange={(e) => setFilters({ ...filters, labsOnSameDays: e.target.checked })}
                className="rounded border-gray-300 text-indigo-600"
              />
              <span>Labs on the same days</span>
            </label>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maximum days per week
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={filters.maxDays || ''}
                  onChange={(e) => setFilters({ 
                    ...filters, 
                    maxDays: e.target.value ? parseInt(e.target.value) : undefined 
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred days
                <div className="mt-1 flex flex-wrap gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <label key={day} className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        checked={filters.specificDays?.includes(index) ?? false}
                        onChange={(e) => {
                          const currentDays = filters.specificDays || [];
                          const newDays = e.target.checked
                            ? [...currentDays, index]
                            : currentDays.filter(d => d !== index);
                          setFilters({
                            ...filters,
                            specificDays: newDays.length > 0 ? newDays : undefined
                          });
                        }}
                        className="rounded border-gray-300 text-indigo-600"
                      />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </label>
            </div>
          </div>

          <button
            onClick={generateSchedules}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Apply Filters
          </button>
        </div>

        {possibleSchedules.length === 0 ? (
          <div className="text-center py-8 text-gray-600">
            No possible schedules found. Try adjusting your class selections or filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {possibleSchedules.map((schedule, index) => (
              <ScheduleDisplay
                key={index}
                schedule={schedule}
                classes={classes}
                onSelect={() => selectSchedule(schedule)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={generateSchedules}
        className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Generate Possible Schedules
      </button>
    </div>
  );
}