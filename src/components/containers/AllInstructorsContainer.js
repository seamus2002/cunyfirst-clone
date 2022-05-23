import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllInstructorsThunk } from "../../store/thunks";
import { AllInstructorsView } from "../views";
import { deleteInstructorThunk } from '../../store/thunks';

class AllInstructorsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllInstructors();
  }

  render() {
    return (
      <AllInstructorsView
        allInstructors={this.props.allInstructors}
        deleteInstructor={this.props.deleteInstructor}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allInstructors: state.allInstructors,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
  };
};

// Type check props;
AllInstructorsContainer.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  fetchAllInstructors: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllInstructorsContainer);