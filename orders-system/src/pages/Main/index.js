import React, { useContext } from 'react';

import pizzaSizes from 'faker-data/pizzas';
import { AuthContext } from 'contexts/Auth';
import Content from 'templates/pages/Content';
import { firstName } from 'helpers/formatter';
import DefaultPageLayout from 'templates/pages/Default';
import PizzaSizeDetails from 'components/PizzaSizeDetails';

import * as S from './style';

/**
 * Página Inicial
 */
const Main = () => {
  const { user } = useContext(AuthContext);

  return (
    <DefaultPageLayout>
      <Content title={`O que vai ser hoje ${firstName(user.name)}? :)`}>
        <S.ContainerPizzas>
          <S.TitlePizzas>
            Escolha o tamanho da pizza
          </S.TitlePizzas>
          <S.ContainerPizzaSizes>
            { pizzaSizes.map((pizzaSize) => (
              <S.GridPizzaSize key={pizzaSize.id}>
                <PizzaSizeDetails details={pizzaSize} />
              </S.GridPizzaSize>
            ))}
          </S.ContainerPizzaSizes>
        </S.ContainerPizzas>
      </Content>
    </DefaultPageLayout>
  );
};

export default Main;
