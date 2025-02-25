import {useParams} from "react-router-dom";
import {useMainContext} from "../Context/MainContextProvider.jsx";
import {ClassForm} from "../components/ClassForm.jsx";

export default function ClassDetails() {
    const {classId} = useParams();
    console.log(classId);
    const {classes, setClasses} = useMainContext();
    const handleAddClass = (newClass) => {
        const existingClassIndex = classes.findIndex((classItem) => classItem.id === newClass.id);
        const updatedClasses = [...classes];
        if (existingClassIndex === -1) {
            updatedClasses.push(newClass);
        } else {
            updatedClasses[existingClassIndex] = newClass;
        }
        setClasses(updatedClasses);
    };
    const classItem = classes.filter((classItem) => classItem.id === classId)[0];

    return (
        <div>
            <ClassForm onSubmit={handleAddClass} initialData={classItem} />
        </div>
    );
}