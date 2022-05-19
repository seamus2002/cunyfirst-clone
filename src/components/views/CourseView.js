const CourseView = (props) => {
  const { course } = props;
  return (
    <div className="container">
      <h1 className="page-header">{course.title}</h1>
      <h3>Instructor</h3>
      <p>{course.instructor.firstname + " " + course.instructor.lastname}</p>
    </div>
  );

};

export default CourseView;