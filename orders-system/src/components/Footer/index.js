import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import {
  Grid,
  Container,
  Typography,
  Button as MaterialButton,
} from '@material-ui/core';
import useAuth from 'hooks/Auth';
import { singularOrPlural } from 'helpers/formatter';

const Footer = ({ buttons, location }) => {
  const { userInfo } = useAuth();

  const { pizzaSize, pizzaFlavors } = location.state;
  const { name, slices, flavors } = pizzaSize;

  console.log('pizzaFlavors: ', pizzaFlavors);

  return (
    <FooterContent>
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

            {pizzaFlavors && (
              <Typography>
                {singularOrPlural(flavors, 'no sabor', 'nos sabores')}{' '}
                <strong>{pizzaFlavors.map(({ name }) => name).join(', ')}</strong>
              </Typography>
            )}
          </OrderContainer>
          <Grid item>
            { buttons.map((button) => (
              <Button key={button.to} {...button} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </FooterContent>
  );
};

const FooterContent = styled.footer`
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

Footer.propTypes = {
  buttons: PropType.array.isRequired,
  location: PropType.shape({
    state: PropType.shape({
      id: PropType.number,
      flavors: PropType.number,
      name: PropType.string,
      slices: PropType.number,
    }),
  }).isRequired,
};

export default withRouter(Footer);
