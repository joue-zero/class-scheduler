


const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function TimeSlotPicker({ timeSlot, onChange, onDelete }) {
  return (
    <div className="flex sm:items-center gap-2 sm:gap-4 p-2 bg-gray-50 rounded sm:flex-row flex-col  ">
      <select
        value={timeSlot.dayOfWeek}
        onChange={(e) => onChange({ ...timeSlot, dayOfWeek: parseInt(e.target.value) })}
        className="rounded border-gray-300 border px-2 py-1"
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
        className="rounded border-gray-300 border px-2 py-1"
      />

      <span>to</span>

      <input
        type="time"
        value={timeSlot.endTime}
        onChange={(e) => onChange({ ...timeSlot, endTime: e.target.value })}
        className="rounded border-gray-300 border px-2 py-1"
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