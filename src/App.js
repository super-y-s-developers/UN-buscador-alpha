import React from 'react';
import { connect } from "react-redux";
import actions from "services/actions";
import courses from 'dummy/courses';

// Organisms
import CourseList from 'components/organisms/CourseList';

// Pages
import Dashboard from 'components/pages/Dashboard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        career: 0
      },
      selectedCourse: null
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleCourseSelection = this.handleCourseSelection.bind(this);
  }

  componentWillMount() {
    this.props.fetchCareers();
  }

  handleFilterChange(e) {
    const value = e.target.value;
    this.setState({
      selectedCourse: null,
      filters: { career: value }
    });
  }

  handleCourseSelection(courseId) {
    const { selectedCourse } = this.state;
    this.setState({
      selectedCourse: selectedCourse != courseId ? courseId : null
    });
  }

  render() {
    const filteredCourses = this.props.careers.length>0 &&
      Object.values(this.props.careers[this.state.filters.career].courses);

    return (
      <Dashboard
        courses={filteredCourses}
        careers={this.props.careers}
        handleFilterChange={this.handleFilterChange}
        handleCourseSelection={this.handleCourseSelection}
        selectedCourse={this.state.selectedCourse}
      />
    );
  }
}


const mapStateToProps = ({ courses, careers }) => { return { courses, careers } };
export default connect(mapStateToProps, actions)(App);
