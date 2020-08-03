import React from 'react';
import './styles.css';

import Grid from 'components/atoms/Grid';
import CourseCard from 'components/molecules/CourseCard';

function CourseList(props) {
  return (
    <Grid columns={3}>

      {props.data && props.data.length>0 && props.data.map((item, index) =>
        <CourseCard
          {...item}
          key={`${index}-d.id`}
          onClick={props.handleCourseSelection}
          selected={props.selectedCourse == item.id}
        />)
      }

    </Grid>
  );
}

export default CourseList;
