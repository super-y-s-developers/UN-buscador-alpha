import React from 'react';
import './styles.css';
import { firstToUpperCase } from 'services/helpers';

import Card from 'components/atoms/Card';
import Badge from 'components/atoms/Badge';
import Icon from 'components/atoms/Icon';

function CourseCard(props) {
  const { name, typologie, id, credits, favorite, selected } = props;

  const handleFavoriteClick = () => {
    console.log('handleFavoriteClick', id);
  }

  return (
    <Card className={`course-card ${selected && 'selected'}`} onClick={() => props.onClick(id)}>
      <span className='card-header'>
        {name &&
          <p>{firstToUpperCase(name)}</p>
        }

        <Icon
          onClick={handleFavoriteClick}
          type={`favorite${favorite !== true && '_border'}`}
        />
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
