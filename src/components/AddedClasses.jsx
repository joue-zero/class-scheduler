import {useMainContext} from "../Context/MainContextProvider.jsx";
import {Link} from "react-router-dom";
import Trash from "./Icons/Trash.jsx";

export default function AddedClasses() {
    const {classes, setClasses, currentSchedule, setCurrentSchedule} = useMainContext();
    const handleRemoveClass = (classId) => {
        const previousClasses = [...classes];
        const updatedClasses = previousClasses.filter((classItem) => classItem.id !== classId);
        setClasses(updatedClasses);
        // const updatedSelection = currentSchedule.selections.filter((classItem) => classItem.classId !== classId);
        setCurrentSchedule({
            selections: []
        });
    }
    return (
        <div className="mt-5">
            <h2 className='font-semibold mb-5'>Added Classes</h2>
            <ul className="mt-5">
                {classes.map((classItem) => (
                    <li key={classItem.id} className={`flex justify-between items-center py-3 border-b border-gray-200`}>
                        <Link to={`/class/${classItem.id}`} className="text-blue-500 hover:underline">
                            {classItem.name}
                        </Link>
                        <Trash
                            onClick={() => handleRemoveClass(classItem.id)}
                            className='cursor-pointer'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}