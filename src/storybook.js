import React from 'react';

// Atoms
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import Badge from 'components/atoms/Badge';
import Input from 'components/atoms/Input';
import Card from 'components/atoms/Card';

// Molecules
import CourseCard from 'components/molecules/CourseCard';

// Organisms
import CourseList from 'components/organisms/CourseList';

// Data
import courses from 'dummy/courses';
import campus from 'dummy/campus';

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

      <h4>Icon</h4>
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

      <h4>Button</h4>
      <Button outlined>Outlined</Button>
      <Button>Default</Button>
      <Button color='pink'>Pink</Button>
      <Button color='yellow'>Yellow</Button>
      <Button color='blue'>Blue</Button>
      <Button color='green'>Green</Button>
      <Button color='violet'>Violet</Button>
      <Button color='red'>Red</Button>
      <Button color='cyan'>Cyan</Button>
      <Button color='indigo'>Indigo</Button>
      <Button color='orange'>Orange</Button>
      <Button color='teal'>Teal</Button>

      <h4>Input</h4>
      <Input
        placeholder='Default Input'
      />
      <br /><br />
      <Input
        type='select'
        placeholder='Sede'
        options={campus}
      />
      <br /><br />
      <Input
        icon='search'
        type='search'
        placeholder='Buscar por nombre o código ...'
      />

      <br /><br /><br /><br />
      <h1>MOLECULES</h1><br />

      <h4>CourseCard</h4>
      <CourseCard
        id='2024481'
        name='Taller de énfasis en multimedia e imagen digital'
        typologie='LE'
        credits={3}
      />

      <br /><br /><br /><br />
      <h1>ORGANISMS</h1><br />

      <h4>CourseList</h4>
      <CourseList data={courses} />

    </div>
  );
}

export default Storybook;
