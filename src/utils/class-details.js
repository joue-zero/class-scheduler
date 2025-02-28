
const getClassDetails = (classes, selection) => {
    const { classId, versionId, labId } = selection;
    const classItem = classes.find(c => c.id === classId);
    if (!classItem) return null;

    const version = classItem.versions.find(v => v.id === versionId);
    if (!version) return null;

    const lab = labId ? version.labs.find(l => l.id === labId) : null;

    return {
        name: classItem.name,
        code: classItem.code,
        // version: version.name,
        professor: version.professor,
        timeSlots: version.timeSlots,
        lab: lab
    };
};

const getAllClassesDetails = (classes, selections) => {
    const spots = [];
    for(const selection of selections) {
        const classDetails = getClassDetails(classes, selection);
        if(!classDetails) continue;
        spots.push(classDetails);
        // for(const lab of classDetails.labs) {
        if(classDetails.lab) {
            spots.push({
                isLab: true,
                className: classDetails.name,
                name: classDetails.lab.name,
                professor: classDetails.professor,
                code: classDetails.code,
                timeSlots: classDetails.lab.timeSlots,
            });
        }
        // }


    }
    return spots;
}
export {
    getClassDetails,
    getAllClassesDetails
}