import { useContext } from 'react';
import { AuthContext } from 'contexts/Auth';

/**
 * Hook que retorna o useContext de autenticação para
 * manter mais simples o uso dele no restante da aplicação
 */
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
