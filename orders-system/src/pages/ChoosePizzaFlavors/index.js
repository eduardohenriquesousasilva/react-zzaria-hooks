import React, { useState } from 'react';
import PropType from 'prop-types';

import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes/index';
import { H4 } from 'components/Title';
import Footer from 'components/Footer';
import Content from 'components/Content';
import Divider from 'components/Divider';
import CardLink from 'components/CardLink';
import PizzasGrid from 'components/PizzasGrid';
import HeaderContent from 'components/HeaderContent';
import pizzasFlavors from 'faker-data/pizzas-flavors';
import { singularOrPlural, toMoney } from 'helpers/formatter';
import { Grid, Typography, Card as MaterialCard } from '@material-ui/core';

const ChoosePizzaFlavors = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));

  const { flavors, id } = location.state.pizzaSize;

  const handleChangeCheckbox = (idPizza) => (event) => {
    if (
      checkboxesChecked(checkboxes).length === flavors
      && event.target.checked === true
    ) {
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
      <Content>
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
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
      <Footer
        buttons={[
          {
            to: HOME,
            children: 'Mudar tamanho',
          },
          {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavors: getFlavorsIdAndName(checkboxes),
              },
            },
            color: 'primary',
            children: 'Quantas pizzas',
          },
        ]}
      />
    </>
  );
};

function checkboxesChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

function getFlavorsIdAndName(checkboxes) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavors.find((flavor) => flavor.id === parseInt(id, 10)).name,
    }));
}

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
