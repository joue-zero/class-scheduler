


const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function TimeSlotPicker({ timeSlot, onChange, onDelete }) {
  return (
    <div className="flex items-center gap-4 p-2 bg-gray-50 rounded">
      <select
        value={timeSlot.dayOfWeek}
        onChange={(e) => onChange({ ...timeSlot, dayOfWeek: parseInt(e.target.value) })}
        className="rounded border-gray-300"
      >
        {DAYS.map((day, index) => (
          <option key={day} value={index}>
            {day}
          </option>
        ))}
      </select>

      <input
        type="time"
        value={timeSlot.startTime}
        onChange={(e) => onChange({ ...timeSlot, startTime: e.target.value })}
        className="rounded border-gray-300"
      />

      <span>to</span>

      <input
        type="time"
        value={timeSlot.endTime}
        onChange={(e) => onChange({ ...timeSlot, endTime: e.target.value })}
        className="rounded border-gray-300"
      />
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      )}
    </div>
  );
}