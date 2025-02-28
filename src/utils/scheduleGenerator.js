
import { hasTimeConflict } from './timeUtils.js';

function hasConflictBetweenVersions(version1, version2) {
  const allTimeSlotsV1 = [...version1.timeSlots, ...(version1.labTimeSlots || [])];
  const allTimeSlotsV2 = [...version2.timeSlots, ...(version2.labTimeSlots || [])];

  // Check conflicts between all time slots (lectures and labs)
  for (const slot1 of allTimeSlotsV1) {
    for (const slot2 of allTimeSlotsV2) {
      if (hasTimeConflict(slot1, slot2)) {
        return true;
      }
    }
  }

  return false;
}

// @ts-ignore
function hasInternalConflicts(version) {
  // Check if labs conflict with their own lectures
  if (!version.labTimeSlots) return false;

  for (const lectureSlot of version.timeSlots) {
    for (const labSlot of version.labTimeSlots) {
      if (hasTimeConflict(lectureSlot, labSlot)) {
        return true;
      }
    }
  }

  return false;
}

function hasConflictsInSchedule(schedule) {
  // Check for internal conflicts in each version

  // TODO this can be  omitted -> given the fact that the Class times Can't conflict with the its own Lab times

  for (const version of schedule) {
    if (hasInternalConflicts(version)) {
      return true;
    }
  }

  // Check conflicts between different versions
  for (let i = 0; i < schedule.length; i++) {
    for (let j = i + 1; j < schedule.length; j++) {
      if (hasConflictBetweenVersions(schedule[i], schedule[j])) {
        return true;
      }
    }
  }
  return false;
}

function getDayOfSchedule(schedule){
  const days = new Set();
  
  for (const version of schedule) {
    // Add lecture days
    version.timeSlots.forEach(slot => days.add(slot.dayOfWeek));
    
    // Add lab days
    version.labTimeSlots?.forEach(slot => days.add(slot.dayOfWeek));
  }
  
  return days;
}

function getLabDaysOfSchedule(schedule) {
  const days = new Set();

  for (const version of schedule) {
    version.labTimeSlots?.forEach(slot => days.add(slot.dayOfWeek));
  }

  return days;
}



export function generatePossibleSchedules(classes, filters) {
  const possibleSchedules = [];
  // console.log(classes);
  const generateCombinations = (
    currentSchedule,
    remainingClasses
  ) => {
    if (remainingClasses.length === 0) {
      if (!hasConflictsInSchedule(currentSchedule)) {
        // Apply filters
        const days = getDayOfSchedule(currentSchedule);
        const labDays = getLabDaysOfSchedule(currentSchedule);

        // Filter for labs on same days
        if (filters?.labsOnSameDays && labDays.size > 1) {
          return;
        }
        // Filter for schedules with all classes on the same days
        if (filters?.sameDays && days.size > 1) {
          return;
        }

        // Filter for specific days
        if (filters?.specificDays) {
          const hasUnwantedDays = Array.from(days).some(
            day => !filters.specificDays?.includes(day)
          );
          if (hasUnwantedDays) {
            return;
          }
        }

        // Filter for maximum number of days
        if (filters?.maxDays && days.size > filters.maxDays) {
          return;
        }

        possibleSchedules.push(currentSchedule.map(v => ({
            classId: v.classId,
            versionId: v.versionId,
            labId: v.labId
          }))
        );
      }
      return;
    }

    const currentClass = remainingClasses[0];
    const nextClasses = remainingClasses.slice(1);

    for (const version of currentClass.versions) {
      const versionWithTimes = {
        classId: currentClass.id,
        versionId: version.id,
        timeSlots: version.timeSlots
      };

      if (version.requiresLab && version.labs.length > 0) {
        for (const lab of version.labs) {
          const versionWithLab = {
            ...versionWithTimes,
            labId: lab.id,
            labTimeSlots: lab.timeSlots
          };

          // TODO this can be  omitted -> given the fact that the Class times Can't conflict with the its own Lab times
          // Skip this combination if there's an internal conflict
          if (!hasInternalConflicts(versionWithLab)) {
            generateCombinations([...currentSchedule, versionWithLab], nextClasses);
          }
        }
      } else {
        generateCombinations([...currentSchedule, versionWithTimes], nextClasses);
      }
    }
  };

  generateCombinations([], classes);
  return possibleSchedules;
}