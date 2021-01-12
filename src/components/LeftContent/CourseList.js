import React from 'react'
import {List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CourseListItem from "./CourseListItem";
import {connect} from "react-redux";
import {getToken, updatePlan} from "../../model/networking";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const CourseList = (props) => {
    const classes = useStyles();
    const renderCourseListItems = (courses, displayedCourses) => {
        return courses.map((course) => {
                let isAlreadyDisplayed = false
                if (displayedCourses.find(dispCourse => dispCourse._id === course._id)) isAlreadyDisplayed = true
                return <CourseListItem course={course}
                                       isAlreadyAdded={isAlreadyDisplayed}
                                       onChangeCallback={onChangeCallback}
                                       key={course._id}
                />
            }
        )
    }
    const onChangeCallback = () => {
        //TODO finish once the redux store has been formalized

        updatePlan(getToken(window),)
    }


    return (
        <List className={classes.root} component='nav' aria-label="main mailbox folders">
            {renderCourseListItems(props.courseArray, props.displayedCourses)}
        </List>
    )
}


const mapStateToProps = (state, ownprops) => {

    if (ownprops.usesSearch === true) {
        return {
            courseArray: state.searchCourses,
            displayedCourses: state.displayedCourses
        }
    } else {
        return {
            courseArray: state.displayedCourses,
            displayedCourses: state.displayedCourses
        }
    }
}

export default connect(mapStateToProps, null)(CourseList)