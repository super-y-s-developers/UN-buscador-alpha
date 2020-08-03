import React from 'react';
import './styles.css';

// Atoms
import Input from 'components/atoms/Input';
import Loader from 'components/atoms/Loader';
import Icon from 'components/atoms/Icon';

// Organisms
import CourseList from 'components/organisms/CourseList';


function Dashboard(props) {
  const selectedCourseData = props.courses && props.courses.filter(c => c.id == props.selectedCourse)[0];

  return (
    <div className={`dashboard ${!props.courses ? 'loading' : ''}`}>
      {!props.courses ?

        <Loader />

        :

        <>
        <div className='sidebar'>
          <div className='sidebar-body'>
          {
            // <div className='buttons'>
            //   <button className='button'>Filtros</button>
            //   <button className='button'>Detalle del curso</button>
            // </div>
          }

          {props.selectedCourse != null ?
            <>
              <h2>{selectedCourseData.name}</h2>
              <h4>Descripción:</h4>
              <p>{selectedCourseData.description.split('.').slice(0,2).join('. ')}.</p>
            </>
            :
            <h4>Selecciona un curso de la lista para ver los horarios y detalles aquí</h4>
          }

          </div>
        </div>


        <div className='content'>
          <div className='content-body'>
            <div className='filters'>
              {
                // <div className='filters-item'>
                //   <InputTitle>Busca por nombre o código</InputTitle>
                //   <Searchbox id='searchbox'></Searchbox>
                // </div>
              }

              <Input
                id="careers"
                type='select'
                label='Carrera'
                options={props.careers.map((c, index) => ({ text: c.name, value: index }))}
                onChange={props.handleFilterChange}
              />
            </div>

            <CourseList
              data={props.courses}
              handleCourseSelection={props.handleCourseSelection}
              selectedCourse={props.selectedCourse}
            />

          </div>
        </div>
        </>
      }
    </div>
  );
}

export default Dashboard;
