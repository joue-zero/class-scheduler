

const getClassDetails = (classes, classId, versionId, labId) => {
    const classItem = classes.find(c => c.id === classId);
    if (!classItem) return null;

    const version = classItem.versions.find(v => v.id === versionId);
    if (!version) return null;

    const lab = labId ? version.labs.find(l => l.id === labId) : null;

    return {
        name: classItem.name,
        code: classItem.code,
        professor: version.professor,
        timeSlots: version.timeSlots,
        lab: lab
    };
};

const getClassesAndLabDetails = (classes, selections) => {
    const spots = [];
    for(const selection of selections) {
        const classDetails = getClassDetails(classes, selection.classId, selection.versionId, selection.labId);
        spots.push({
            name: classDetails?.name,
            code: classDetails?.code,
            professor: classDetails?.professor,
            timeSlots: classDetails?.timeSlots
        });
        if(!classDetails?.lab) continue;
        classDetails.lab.timeSlots.forEach(timeSlot => {
            // @ts-ignore
            spots.push({
                name: classDetails.name,
                code: classDetails.code,
                professor: classDetails.lab.name,
                timeSlots: [timeSlot]
            });
        })
        // console.log(classDetails.lab);
        // for(const lab of classDetails?.lab) {
        //     spots.push({
        //         name: lab.name,
        //         code: classDetails.code,
        //         professor: classDetails.professor,
        //         timeSlots: lab.timeSlots
        //     });
        // }
    }
    return spots;
}
export {
    getClassDetails,
    getClassesAndLabDetails
}