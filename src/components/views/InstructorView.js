import { Link } from "react-router-dom";


const InstructorView = (props) => {
  const {instructor, editCourse, allCourses} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  
  return (
    <div className="container">      
      <h1 className="page-header">{instructor.firstname} {instructor.lastname}</h1>
      <h3 className="page-header">Department: {instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button type="button" class="btn btn-danger" onClick={() => editCourse({id:course.id, instructorId: null})}>X</button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button type="button" class="btn btn-primary" onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>

  
    </div>
  );

};

export default InstructorView;