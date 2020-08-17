import React from 'react'
import styled from 'styled-components'
import './styles.css'

// Atoms
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Loader from 'components/atoms/Loader'
import Grid from 'components/atoms/Grid'

// Organisms
import CourseList from 'components/organisms/CourseList'


function Dashboard(props) {
  const selectedCourseData = props.courses &&
    props.courses.filter(c => c.id == props.selectedCourse)[0]

  return (
    <div className={`dashboard ${!props.courses ? 'loading' : ''}`}>
      {!props.courses ?
        <Loader />

        :

        <>
        <div className='sidebar'>
          <div className='sidebar-body'>
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
            <Filters columns={3}>
              <Input
                id='searchbar'
                icon='search'
                placeholder='Buscar por código o nombre ...'
              />
              <Input
                id="careers"
                type='select'
                // label='Carrera'
                options={props.careers.map((c, index) => ({ text: c.name, value: index }))}
                onChange={props.handleFilterChange}
              />
            </Filters>

            <p>{props.courses.length} resultados con tu búsqueda</p>

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
  )
}

const Filters = styled(Grid)`
  margin-bottom: 2em;
`

export default Dashboard
