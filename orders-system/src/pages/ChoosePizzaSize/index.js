import React from 'react';
import styled from 'styled-components';

import useAuth from 'hooks/Auth';
import Content from 'components/Content';
import Divider from 'components/Divider';
import { H3, H4 } from 'components/Title';
import CardLink from 'components/CardLink';
import PizzasGrid from 'components/PizzasGrid';
import pizzaSizes from 'faker-data/pizzas-sizes';
import { CHOOSE_PIZZA_FLAVORS } from 'routes/index';
import { singularOrPlural } from 'helpers/formatter';
import { Card, Grid, Typography } from '@material-ui/core';

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth();

  return (
    <Content>
      <Grid container direction="column" alignItems="center">
        <H3>
          O que vai ser hoje, {userInfo.user.firstName}? =)
        </H3>

        <H4>
          Escolha o tamanho da pizza:
        </H4>
      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink to={{
                pathname: CHOOSE_PIZZA_FLAVORS,
                state: pizza,
              }}
              >
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavors} {' '}
                  {singularOrPlural(pizza.flavors, 'sabor', 'sabores')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>

    </Content>
  );
};

const Pizza = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: ${({ theme }) => theme.palette.grey.A100};
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`;

const PizzaText = styled(Typography).attrs({
  variant: 'h5',
})`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`;

export default ChoosePizzaSize;
