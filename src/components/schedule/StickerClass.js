export class StickerClass {

    constructor(course, meeting, color, isHighlight) {
        const subtitle = course.courseTitle + "-\n-" + findPrimaryFaculty(course)
        this.title = course.courseIdentifier;
        this.subtitle = subtitle;
        this['CRN'] = course['CRN'];
        this.beginTime = meeting.beginTime;
        this.endTime = meeting.endTime;
        this.color = color;
        this.isHighlight = isHighlight
    }
}
const findPrimaryFaculty = (course)=>{
    for (const professor of course['faculty']){
        if(professor['isFaculty']===true){
            return professor.displayName
        }
    }
    if (course['faculty'].length===0){
        return null
    }else{
        return course['faculty'][0].displayName
    }
}