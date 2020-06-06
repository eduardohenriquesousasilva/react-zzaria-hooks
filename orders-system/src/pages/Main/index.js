import React, { useContext } from 'react';

import Pizza from 'components/Pizza';
import { AuthContext } from 'stories/Auth';
import pizzaSizes from 'services/Pizzas';
import Content from 'templates/pages/Content';
import { userFirstName } from 'presenters/User';
import DefaultPageLayout from 'templates/pages/Default';

import * as S from './style';

/**
 * Página Inicial
 */
const Main = () => {
  const { user } = useContext(AuthContext);

  console.log('pizzaSizes: ', pizzaSizes);

  return (
    <DefaultPageLayout>
      <Content title={`O que vai ser hoje ${userFirstName(user.name)}? :)`}>
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
                  <S.SizeSlaces>{ slices } fatiras, { flavours } Sabores</S.SizeSlaces>
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
