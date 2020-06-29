import React, { useState } from 'react';
import PropType from 'prop-types';

import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { H4 } from 'components/Title';
import Divider from 'components/Divider';
import CardLink from 'components/CardLink';
import { HOME } from 'routes/index';
import PizzasGrid from 'components/PizzasGrid';
import HeaderContent from 'components/HeaderContent';
import singularOrPlural from 'helpers/formatter';
import pizzasFlavors from 'faker-data/pizzas-flavors';
import { Card as MaterialCard, Grid, Typography } from '@material-ui/core';

const ChoosePizzaFlavors = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));

  const { flavors, id } = location.state;

  const validateLimitFlavors = (currentChecked) => {
    const flavorsCheckeds = Object
      .values(checkboxes)
      .filter((checkbox) => !!checkbox)
      .length;

    if (flavorsCheckeds === flavors && currentChecked) {
      return false;
    }

    return true;
  };

  const handleChangeCheckbox = (idPizza) => (event) => {
    if (!validateLimitFlavors(event.target.checked)) {
      return;
    }

    setCheckboxes((prevCheckboxes) => (
      {
        ...prevCheckboxes,
        [idPizza]: event.target.checked,
      }
    ));
  };

  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavors} {' '}
          {singularOrPlural(flavors, 'sabor', 'sabores')}:
        </H4>
      </HeaderContent>
      <PizzasGrid>
        {pizzasFlavors.map((pizza) => (
          <Grid item xs key={pizza.id}>
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <Checkbox
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckbox(pizza.id)}
                />
                <Img src={pizza.image} alt={pizza.name} />

                <Divider />

                <Typography>{pizza.name}</Typography>
                <Typography variant="h5">
                  {pizza.value[id]}
                </Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
};

const Card = styled(MaterialCard)`
  border: 1px solid transparent;
  border-color: ${({ theme, checked }) => (checked ? theme.palette.secondary.light : '')};

  ${Divider} {
    background-color: ${({ theme, checked }) => (checked ? theme.palette.secondary.light : '')};
  }
`;

const Label = styled(CardLink).attrs({
  component: 'label',
})``;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

const Img = styled.img`
  width: 200px;
`;

ChoosePizzaFlavors.propTypes = {
  location: PropType.shape({
    state: PropType.shape({
      id: PropType.number,
      flavors: PropType.number,
    }),
  }).isRequired,
};

export default ChoosePizzaFlavors;
