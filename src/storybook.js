import React from 'react';
import courses from 'data/courses';

// Atoms
import Icon from 'components/atoms/Icon';
import Badge from 'components/atoms/Badge';
import Checkbox from 'components/atoms/Checkbox';
import Searchbox from 'components/atoms/Searchbox';
import Card from 'components/atoms/Card';

// Molecules
import CourseCard from 'components/molecules/CourseCard';

function Storybook() {
  return (
    <div>

      <h1>ATOMS</h1><br />

      <h4>Badge</h4>
      <Badge outlined>Outlined</Badge>
      <Badge>Default</Badge>
      <Badge color='pink'>Pink</Badge>
      <Badge color='yellow'>Yellow</Badge>
      <Badge color='blue'>Blue</Badge>
      <Badge color='green'>Green</Badge>
      <Badge color='violet'>Violet</Badge>
      <Badge color='red'>Red</Badge>
      <Badge color='cyan'>Cyan</Badge>
      <Badge color='indigo'>Indigo</Badge>
      <Badge color='orange'>Orange</Badge>
      <Badge color='teal'>Teal</Badge>

      <h4>Badge</h4>
      <Icon type='face' />
      <Icon type='face' color='pink' />
      <Icon type='face' color='yellow' />
      <Icon type='face' color='blue' />
      <Icon type='face' color='green' />
      <Icon type='face' color='violet' />
      <Icon type='face' color='red' />
      <Icon type='face' color='cyan' />
      <Icon type='face' color='indigo' />
      <Icon type='face' color='orange' />
      <Icon type='face' color='teal' />

      <h4>Checkbox</h4>
      <Checkbox id='checkbox-1' checked>Solo materias de mi carrera, que no he superado</Checkbox>
      <Checkbox id='checkbox-2'>Solo que puedo ver</Checkbox>

      <h4>Searchbox</h4>
      <Searchbox id='searchbox-1'>Solo materias que puedo ver</Searchbox>

      <h1>MOLECULES</h1><br />

      <h4>CourseCard</h4>
      <CourseCard
        id='2024481'
        name='Taller de énfasis en multimedia e imagen digital'
        typologie='LE'
        credits={3}
      />

    </div>
  );
}

export default Storybook;
