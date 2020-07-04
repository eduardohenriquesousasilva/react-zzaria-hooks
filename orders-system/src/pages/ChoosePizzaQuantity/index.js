import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

import { H4 } from 'components/Title';
import Footer from 'components/Footer';
import Content from 'components/Content';
import { CHOOSE_PIZZA_FLAVORS } from 'routes/index';
import HeaderContent from 'components/HeaderContent';
import { Input as MaterialInput } from '@material-ui/core';

const ChoosePizzaQuantity = ({ location }) => {
  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Quantas pizzas vcocê gostaria? <br />
            de pedir com esses sabores?
          </H4>
        </HeaderContent>

        <MainContent>
          <div>
            <Input defaultValue="1" autoFocus />
          </div>
        </MainContent>
      </Content>
      <Footer
        buttons={[
          {
            to: {
              pathname: CHOOSE_PIZZA_FLAVORS,
              state: location.state
            },
            children: 'Mudar Sabores'
          },
          {
            to: '/',
            children: 'Finalizar compra',
            color: 'primary'
          },
        ]}
      />
    </>
  );
};

const Input = styled(MaterialInput).attrs({
  type: 'number',
})`
  & input {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    padding: ${({ theme }) => theme.spacing(1)}px;;
    text-align: center;
    width: 150px;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

ChoosePizzaQuantity.propTypes = {
  location: PropType.shape({
    state: PropType.shape({
      id: PropType.number,
      flavors: PropType.number,
      name: PropType.string,
      slices: PropType.number,
    }),
  }).isRequired,
};

export default ChoosePizzaQuantity;
