const CourseView = (props) => {
  const { course } = props;
  return (
    <div className="container">
      <h1 className="page-header">{course.title}</h1>
      <h3>Instructor</h3>
      {course.instructor ? <p>{course.instructor.firstname + " " + course.instructor.lastname}</p> : <p>staff</p>}
      <h3>Timeslot</h3>
      {course.timeslot ? <p>{course.timeslot}</p> : <p>Asynchronous</p>}
      <h3>Location</h3>
      {course.location ? <p>{course.location}</p> : <p>Online</p>}
    </div>
  );

};

export default CourseView;