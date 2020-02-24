import React from 'react';
import './styles.css';

// Atoms
import InputTitle from 'components/atoms/InputTitle';
import Searchbox from 'components/atoms/Searchbox';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';

// Organisms
import CourseList from 'components/organisms/CourseList';


function LeftSidebarDashboard(props) {
  const selectedCourseData = props.courses && props.courses.filter(c => c.id == props.selectedCourse)[0];

  return (
    <div className='dashboard'>
      <div className='sidebar'>
        <div className='sidebar-body'>

          {props.selectedCourse != null ?
            <>
              <Title>{selectedCourseData.name}</Title>
              <Subtitle>Descripción:</Subtitle>
              <p>{selectedCourseData.description.split('.').slice(0,2).join('. ')}.</p>
            </>
            :
            <Title>Selecciona un curso de la lista para ver los horarios y detalles aquí</Title>
          }

        </div>
      </div>


      <div className='content'>
        <div className='content-body'>

          <div className='filters'>
            <div className='filters-item'>
              <InputTitle>Busca por nombre o código</InputTitle>
              <Searchbox id='searchbox'></Searchbox>
            </div>

            <div className='filters-item'>
              <InputTitle>Carrera</InputTitle>
              <select id="careers" onChange={props.handleInputChange}>
                {props.careers.map((c, index) =>
                  <option value={index}>{c.name}</option>
                )}
              </select>
            </div>
          </div>

          <CourseList
            data={props.courses}
            handleCourseSelection={props.handleCourseSelection}
          />

        </div>
      </div>
    </div>
  );
}

export default LeftSidebarDashboard;
