import React from 'react';
import './styles.css';
import { firstToUpperCase } from 'services/helpers';

import Card from 'components/atoms/Card';
import Badge from 'components/atoms/Badge';

function CourseCard(props) {
  const { name, typologie, id, credits, favorite, selected } = props;

  const handleFavoriteClick = () => {
    console.log('holi', id);
  }

  return (
    <Card className={`course-card ${selected && 'selected'}`} onClick={() => props.onClick(id)}>
      <span className='card-header'>
        {name &&
          <p>{firstToUpperCase(name)}</p>
        }

        <i className='icon' onClick={handleFavoriteClick}>
          favorite{favorite !== true && '_border'}
        </i>
      </span>

      <span className='card-footer'>
        <div>
          {typologie &&
            <Badge color='pink'>
              {typeof typologie === 'string' ? typologie : Object.values(typologie)[0]}
            </Badge>
          }
        </div>

        <div>
          {id &&
            <Badge>{id}</Badge>
          }

          {credits &&
            <Badge>{credits}</Badge>
          }
        </div>
      </span>
    </Card>
  );
}

export default CourseCard;
