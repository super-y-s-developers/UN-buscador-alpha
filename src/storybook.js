import React from 'react';
import courses from 'data/courses';

// Atoms
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import Badge from 'components/atoms/Badge';
import Checkbox from 'components/atoms/Checkbox';
import Searchbox from 'components/atoms/Searchbox';
import Card from 'components/atoms/Card';

// Molecules
import CourseCard from 'components/molecules/CourseCard';

// Organisms
import CourseList from 'components/organisms/CourseList';

function Storybook() {
  return (
    <div>

      <h4>CourseList</h4>
      <CourseList
        data={courses}
      />

      <h4>CourseCard</h4>
      <CourseCard
        id='2024481'
        name='Nuevos y viejos conflictos en el orden internacional tras el fin de la guerra'
        typologie='LIBRE ELLECCION'
        credits={3}
      />

      <h4>Paragraph:</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis mauris quis quam pellentesque cursus. Donec vel viverra ex. Integer porttitor eget arcu sit amet suscipit. In gravida rhoncus urna, vel interdum nunc commodo vitae. Nunc ullamcorper lacus id tellus ultrices, at rhoncus nunc dignissim. Nam ultricies eros dui, eget posuere sem malesuada et. Curabitur justo dui, fermentum at velit at, scelerisque sollicitudin elit. Suspendisse vulputate imperdiet urna, facilisis pharetra turpis elementum sed. Integer ex odio, imperdiet eget risus sit amet, fermentum porttitor lorem. Sed nec felis magna. Donec et purus nisi. Donec vel nibh leo.</p>

      <h4>Title</h4>
      <Title>What the</Title>

      <h4>Subtitle</h4>
      <Subtitle>What the</Subtitle>

      <h4>Badge</h4>
      <Badge color='yellow'>Libre elección - L</Badge>
      <Badge outlined>2024481</Badge>
      <Badge outlined color='pink'>What the</Badge>

      <h4>Checkbox</h4>
      <Checkbox id='checkbox-1' checked>Solo materias de mi carrera, que no he superado</Checkbox>
      <Checkbox id='checkbox-2'>Solo materias de mi carrera, que no he superado</Checkbox>

      <h4>Searchbox</h4>
      <Searchbox id='searchbox-1'>Solo materias de mi carrera, que no he superado</Searchbox>

      <h4>Card</h4>
      <Card>Holiiii</Card>

    </div>
  );
}

export default Storybook;
