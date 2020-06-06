import React, { useContext } from 'react';

import { AuthContext } from 'stories/Auth';
import Default from 'templates/pages/Default';
import { userFirstName } from 'presenters/User';
import PageContent from 'components/PageContent';

/**
 * Página Inicial
 */
const Main = () => {
  const { user } = useContext(AuthContext);

  return (
    <Default>
      <PageContent title={`O que vai ser hoje ${userFirstName(user.name)}? :)`}>
        Conteúdo da página
      </PageContent>
    </Default>
  );
};

export default Main;
