import React from 'react';
import courses from 'data/courses';
import { connect } from "react-redux";
import actions from "services/actions";

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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCourseSelection = this.handleCourseSelection.bind(this);
  }

  componentWillMount() {
    this.props.fetchCareers();
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState({
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
    console.log(this.state.selectedCourse);
    const filteredCourses = this.props.careers.length>0 &&
      Object.values(this.props.careers[this.state.filters.career].courses);

    return (
      <>
        <Dashboard
          courses={filteredCourses}
          careers={this.props.careers}
          handleInputChange={this.handleInputChange}
          handleCourseSelection={this.handleCourseSelection}
          selectedCourse={this.state.selectedCourse}
        />
      </>
    );
  }
}


const mapStateToProps = ({ courses, careers }) => { return { courses, careers } };
export default connect(mapStateToProps, actions)(App);
