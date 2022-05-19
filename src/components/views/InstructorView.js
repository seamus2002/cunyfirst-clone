const InstructorView = (props) => {
  const {instructor} = props;
  return (
    <div className="container">      
      <h1 className="page-header">{instructor.firstname} {instructor.lastname}</h1>
      <br />
      <h3>Department</h3>
      <p>{instructor.department}</p>
      <br />
      <h3>Courses Taught</h3>
      {instructor.courses.map( course => {
        return (
          <p key={course.id}>{course.title}</p>
        );
      })}
    </div>
  );

};

export default InstructorView;