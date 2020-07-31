import React from 'react';
import './styles.css';

import CourseCard from 'components/molecules/CourseCard';
import Card from 'components/atoms/Card';

function CourseList(props) {
  return (
    <div className='course-list'>

      {props.data && props.data.length>0 && props.data.map((d, index) =>
        <CourseCard
          key={`${index}-d.id`}
          id={d.id}
          name={d.name}
          typologie={d.typologie}
          credits={d.credits}
          onClick={props.handleCourseSelection}
          selected={props.selectedCourse == d.id}
        />)
      }

    </div>
  );
}

export default CourseList;
