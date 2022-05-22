import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {

  if (!props.allInstructors.length) {
    return (
      <div className="container">
        <h1 className="page-header">Instructors</h1>
        <h3>There are no instructors.</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-header">Instructors</h1>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
        </div>
        );

      })}
      <Link to={`/newinstructor`}>
        <button type="button" class="btn btn-primary">Add New Instructor</button>
      </Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;