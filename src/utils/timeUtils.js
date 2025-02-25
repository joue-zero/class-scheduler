import {parse, areIntervalsOverlapping} from 'date-fns';

export function parseTimeSlot(timeSlot, baseDate) {
  const start = parse(timeSlot.startTime, 'HH:mm', baseDate);
  const end = parse(timeSlot.endTime, 'HH:mm', baseDate);
  
  return { start, end };
}

export function hasTimeConflict(slot1, slot2) {
  if (slot1.dayOfWeek !== slot2.dayOfWeek) return false;
  
  const baseDate = new Date();
  const interval1 = parseTimeSlot(slot1, baseDate);
  const interval2 = parseTimeSlot(slot2, baseDate);
  
  return areIntervalsOverlapping(interval1, interval2);
}

export function validateSchedule(schedule) {
  for (let i = 0; i < schedule.length; i++) {
    for (let j = i + 1; j < schedule.length; j++) {
      if (hasTimeConflict(schedule[i], schedule[j])) {
        return false;
      }
    }
  }
  return true;
}