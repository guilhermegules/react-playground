import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { Container } from './styles';

function Product({
  name,
  picture,
  id,
  value,
  unit
}) {
  return (
      <Container>
        <div>
          <img
            src={`/assets/${picture}.png`}
            alt={`foto de ${name}`}
          />
          <p>
            {name} - R$ {value?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Product)