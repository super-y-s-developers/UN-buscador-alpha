import React from 'react';
import './styles.css';

import Card from 'components/atoms/Card';
import Title from 'components/atoms/Title';
import Badge from 'components/atoms/Badge';

function CourseCard(props) {
  const { name, typologie, id, credits, favorite } = props;

  const handleFavoriteClick = () => {
    console.log('holi', id);
  }

  return (
    <Card className='course-card' onClick={() => props.onClick(id)}>
      <span className='card-header'>
        {name &&
          <p>{name.toLowerCase()}</p>
        }

        <i className='icon' onClick={handleFavoriteClick}>
        favorite{favorite != true && '_border'}
        </i>
      </span>

      {typologie &&
        <Badge color='yellow'>
          {typeof typologie == 'string' ? typologie : Object.values(typologie)[0]}
        </Badge>
      }

      <span className='card-footer'>
        {id &&
          <Badge outlined>{id}</Badge>
        }

        {credits &&
          <Badge outlined>{credits} créditos</Badge>
        }
      </span>
    </Card>
  );
}

export default CourseCard;
