const CourseView = (props) => {
  const { course } = props;
  return (
    <div className="container">
      <h1 className="page-header">{course.title}</h1>
      <h3>Instructor</h3>
      {course.instructor ? <p>{course.instructor.firstname + " " + course.instructor.lastname}</p>: <p>staff</p>}
    </div>
  );

};

export default CourseView;