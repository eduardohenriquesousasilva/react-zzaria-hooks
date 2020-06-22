import React from 'react';
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
import { Card, Grid, Typography } from '@material-ui/core';

const ChoosePizzaFlavors = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const { flavors, id } = location.state;

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
          <Grid item key={pizza.id} xs>
            <Card>
              <Label>
                <input type="checkbox" />
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

ChoosePizzaFlavors.propTypes = {
  location: PropType.shape({
    state: PropType.shape({
      id: PropType.number,
      flavors: PropType.number,
    }),
  }).isRequired,
};

const Label = styled(CardLink).attrs({
  component: 'label',
})``;

const Img = styled.img`
  width: 200px;
`;

export default ChoosePizzaFlavors;
