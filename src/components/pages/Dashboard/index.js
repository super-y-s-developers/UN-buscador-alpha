import React from 'react';
import './styles.css';

// Atoms
import InputTitle from 'components/atoms/InputTitle';
import Searchbox from 'components/atoms/Searchbox';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
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
            <h1>
              <Icon type='search' color='primary' />
              UN Buscador
            </h1>

            <div className='filters'>
              {
                // <div className='filters-item'>
                //   <InputTitle>Busca por nombre o código</InputTitle>
                //   <Searchbox id='searchbox'></Searchbox>
                // </div>
              }

              <div className='filters-item'>
                <InputTitle>Filtrar por carrera</InputTitle>
                <select id="careers" onChange={props.handleFilterChange}>
                  {props.careers.map((c, index) =>
                    <option key={c.id} value={index}>{c.name}</option>
                  )}
                </select>
              </div>
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
