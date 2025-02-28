import { useState } from 'react';
import { ClassForm } from './components/ClassForm.jsx';
import ScheduleBuilder  from './components/ScheduleBuilder.jsx';
import { useMainContext } from './Context/MainContextProvider.jsx';
import AddedClasses  from './components/AddedClasses';
function App() {
  const [isAddingClass, setIsAddingClass] = useState(false);
  const { classes, setClasses } = useMainContext();
  const handleAddClass = (newClass) => {
    setClasses([...classes, newClass]);
    setIsAddingClass(false);
  };



  return (
      <>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Class Scheduler</h1>
          <div className="space-y-8">
            {isAddingClass ? (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Class</h2>
                <ClassForm
                  onSubmit={handleAddClass}
                />
                <button
                  onClick={() => setIsAddingClass(false)}
                  className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setIsAddingClass(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Add Class
                </button>
                <AddedClasses />
              </div>
            )}


              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Build Your Schedule</h2>
                {classes.length == 0 ? (
                  <p className="text-gray-600 mb-4">Select the classes you want to take and build your schedule.</p>
                ) :
                <ScheduleBuilder />}
              </div>

          </div>
        </>
  );
}

export default App;