import React, { useState } from 'react';
import { TimeSlotPicker } from './TimeSlotPicker.jsx';


export function ClassForm({ onSubmit, initialData }) {
  const [classData, setClassData] = useState(initialData || {
    id: crypto.randomUUID(),
    name: '',
    code: '',
    versions: [],
  });
  console.log(initialData, "here");
  const addVersion = () => {
    const newVersion = {
      id: crypto.randomUUID(),
      professor: '',
      timeSlots: [{
        dayOfWeek: 1, // Monday
        startTime: '09:00',
        endTime: '10:30'
      }],
      labs: [],
      requiresLab: false,
    };
    setClassData({
      ...classData,
      versions: [...classData.versions, newVersion],
    });
  };

  const addTimeSlotToVersion = (versionIndex) => {
    const newTimeSlot = {
      dayOfWeek: 1,
      startTime: '09:00',
      endTime: '10:30'
    };
    const updatedVersions = [...classData.versions];
    updatedVersions[versionIndex].timeSlots.push(newTimeSlot);
    setClassData({
      ...classData,
      versions: updatedVersions,
    });
  };

  const updateVersionTimeSlot = (versionIndex, timeSlotIndex, newTimeSlot) => {
    const updatedVersions = [...classData.versions];
    updatedVersions[versionIndex].timeSlots[timeSlotIndex] = newTimeSlot;
    setClassData({
      ...classData,
      versions: updatedVersions,
    });
  };

  const removeVersionTimeSlot = (versionIndex, timeSlotIndex) => {
    const updatedVersions = [...classData.versions];
    updatedVersions[versionIndex].timeSlots.splice(timeSlotIndex, 1);
    setClassData({
      ...classData,
      versions: updatedVersions,
    });
  };

  const addLabToVersion = (versionIndex) => {
    const newLab = {
      id: crypto.randomUUID(),
      name: 'Lab Section',
      timeSlots: [{
        dayOfWeek: 1,
        startTime: '14:00',
        endTime: '15:30'
      }],
    };
    const updatedVersions = [...classData.versions];
    updatedVersions[versionIndex].labs.push(newLab);
    setClassData({
      ...classData,
      versions: updatedVersions,
    });
  };

  const updateLabTimeSlot = (versionIndex, labIndex, timeSlotIndex, newTimeSlot) => {
    const updatedVersions = [...classData.versions];
    updatedVersions[versionIndex].labs[labIndex].timeSlots[timeSlotIndex] = newTimeSlot;
    setClassData({
      ...classData,
      versions: updatedVersions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(classData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Class Name
          <input
            type="text"
            value={classData.name}
            onChange={(e) => setClassData({ ...classData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </label>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Class Code
          <input
            type="text"
            value={classData.code}
            onChange={(e) => setClassData({ ...classData, code: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </label>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Class Versions</h3>
        {classData.versions.map((version, vIndex) => (
          <div key={version.id} className="border p-4 rounded">
            <h4 className="text-md font-medium mb-4">Version {vIndex + 1}</h4>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Professor"
                value={version.professor}
                onChange={(e) => {
                  const updatedVersions = [...classData.versions];
                  updatedVersions[vIndex].professor = e.target.value;
                  setClassData({ ...classData, versions: updatedVersions });
                }}
                className="block w-full rounded-md border-gray-300 shadow-sm"
              />

              <div className="space-y-2">
                <h5 className="text-sm font-medium">Class Times</h5>
                {version.timeSlots.map((timeSlot, tsIndex) => (
                  <TimeSlotPicker
                    key={tsIndex}
                    timeSlot={timeSlot}
                    onChange={(newTimeSlot) => updateVersionTimeSlot(vIndex, tsIndex, newTimeSlot)}
                    onDelete={version.timeSlots.length > 1 ? () => removeVersionTimeSlot(vIndex, tsIndex) : undefined}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addTimeSlotToVersion(vIndex)}
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  + Add another time
                </button>
              </div>

              {/*add labs to this class */}

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={version.requiresLab}
                    onChange={(e) => {
                      const updatedVersions = [...classData.versions];
                      updatedVersions[vIndex].requiresLab = e.target.checked;
                      setClassData({ ...classData, versions: updatedVersions });
                    }}
                    className="rounded border-gray-300 text-indigo-600"
                  />
                  <span className="ml-2">Requires Lab</span>
                </label>
              </div>

              {version.requiresLab && (
                <div className="space-y-4">
                  <h5 className="text-sm font-medium">Lab Sections</h5>
                  {version.labs.map((lab, labIndex) => (
                    <div key={lab.id} className="border-l-2 border-indigo-200 pl-4 space-y-2">
                      <input
                        type="text"
                        value={lab.name}
                        onChange={(e) => {
                          const updatedVersions = [...classData.versions];
                          updatedVersions[vIndex].labs[labIndex].name = e.target.value;
                          setClassData({ ...classData, versions: updatedVersions });
                        }}
                        placeholder="Lab Section Name"
                        className="block w-full rounded-md border-gray-300 shadow-sm"
                      />
                      {lab.timeSlots.map((timeSlot, tsIndex) => (
                        <TimeSlotPicker
                          key={tsIndex}
                          timeSlot={timeSlot}
                          onChange={(newTimeSlot) => updateLabTimeSlot(vIndex, labIndex, tsIndex, newTimeSlot)}
                        />
                      ))}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addLabToVersion(vIndex)}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    + Add Lab Section
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        
        <button
          type="button"
          onClick={addVersion}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Version
        </button>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Class
      </button>
    </form>
  );
}