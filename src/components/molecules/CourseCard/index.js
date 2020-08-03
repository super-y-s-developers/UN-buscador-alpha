import React from 'react';
import './styles.css';
import { firstToUpperCase } from 'services/helpers';

import Card from 'components/atoms/Card';
import Badge from 'components/atoms/Badge';
import Icon from 'components/atoms/Icon';

// dummy
import { typologyMapping, typologies } from 'dummy/typologies'

function CourseCard(props) {
  const { name, typologie, id, credits, favorite, selected } = props
  const tempTypo = typeof typologie === 'string' ? typologie : Object.values(typologie)[0]
  const typoId = typologyMapping[tempTypo] ? typologyMapping[tempTypo] : 'LE'

  const handleFavoriteClick = () => {
    console.log('handleFavoriteClick', id);
  }

  return (
    <Card className={`course-card ${selected && 'selected'}`} onClick={() => props.onClick(id)}>
      <div className='card-header'>
        {name &&
          <p>{firstToUpperCase(name)}</p>
        }

        <Icon
          onClick={handleFavoriteClick}
          type={`favorite${favorite !== true && '_border'}`}
        />
    </div>

      <div className='card-footer'>
        {typologie &&
          <Badge color={typologies[typoId].color}>{typoId}</Badge>
        }

        <div>
          {id && <Badge>{id}</Badge>}

          {credits && <Badge>{credits}</Badge>}
        </div>
      </div>
    </Card>
  );
}

export default CourseCard;
