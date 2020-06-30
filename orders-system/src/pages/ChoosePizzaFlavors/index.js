import React, { useState } from 'react';
import PropType from 'prop-types';

import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';

import {
  Grid,
  Container,
  Typography,
  Card as MaterialCard,
  Button as MaterialButton,
} from '@material-ui/core';
import useAuth from 'hooks/Auth';
import { H4 } from 'components/Title';
import Content from 'components/Content';
import Divider from 'components/Divider';
import CardLink from 'components/CardLink';
import PizzasGrid from 'components/PizzasGrid';
import HeaderContent from 'components/HeaderContent';
import pizzasFlavors from 'faker-data/pizzas-flavors';
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes/index';
import { singularOrPlural, toMoney } from 'helpers/formatter';

const ChoosePizzaFlavors = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));
  const { userInfo } = useAuth();

  const {
    flavors,
    id,
    name,
    slices,
  } = location.state;

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
      <Footer>
        <Container maxWidth="lg">
          <Grid container>
            <OrderContainer>
              <Typography>
                <strong>
                  {userInfo.user.firstName} seu pedido é:
                </strong>
              </Typography>
              <Typography>
                Pizza <strong>{name.toUpperCase()}</strong> - {' '}
                (
                {slices} {singularOrPlural(flavors, 'fatia', 'fatias')}, {' '}
                {flavors} {singularOrPlural(flavors, 'sabor', 'sabores')}
                )
              </Typography>
            </OrderContainer>
            <Grid item>
              <Button to={HOME}>Mudar tamanho</Button>
              <Button to={CHOOSE_PIZZA_QUANTITY} color="primary">Quantas pizzas</Button>
            </Grid>
          </Grid>
        </Container>
      </Footer>
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

const Footer = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey.A300};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`;

const OrderContainer = styled(Grid).attrs({
  item: true,
})`
  flex-grow: 1;
`;

const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  component: Link,
})`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

ChoosePizzaFlavors.propTypes = {
  location: PropType.shape({
    state: PropType.shape({
      id: PropType.number,
      flavors: PropType.number,
      name: PropType.string,
      slices: PropType.number,
    }),
  }).isRequired,
};

export default ChoosePizzaFlavors;
