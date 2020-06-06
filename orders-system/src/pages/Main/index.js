import React, { useContext } from 'react';

import Pizza from 'components/Pizza';
import { AuthContext } from 'stories/Auth';
import pizzaSizes from 'services/Pizzas';
import Content from 'templates/pages/Content';
import { firstName, singularOrPlural } from 'helpers/formatter';
import DefaultPageLayout from 'templates/pages/Default';

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
            { pizzaSizes.map(({
              id,
              name,
              size,
              slices,
              flavours,
            }) => (
              <S.GridPizzaSize key={id}>
                <S.PaperSizeDetails>
                  <Pizza size={size} />
                  <S.Divider />
                  <S.SizeName>{ name }</S.SizeName>
                  <S.SizeSlaces>
                    { slices } { singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
                    { flavours } { singularOrPlural(flavours, 'sabor', 'sabores') }
                  </S.SizeSlaces>
                </S.PaperSizeDetails>
              </S.GridPizzaSize>
            ))}
          </S.ContainerPizzaSizes>
        </S.ContainerPizzas>
      </Content>
    </DefaultPageLayout>
  );
};

export default Main;
