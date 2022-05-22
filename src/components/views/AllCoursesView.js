import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div className="container">
      <h1 className="page-header">Courses</h1>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button type="button" class="btn btn-primary">Add New Course</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className="container">
      <h1 className="page-header">Courses</h1>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button type="button" class="btn btn-danger" onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <br />
      <Link to={`/newcourse`}>
        <button type="button" class="btn btn-primary">Add New Course</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;