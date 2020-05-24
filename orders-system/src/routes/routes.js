/**
 * Definições das rotas
 */
const Routes = [
  {
    path: '/',
    component: 'Main',
    label: 'Reactzzaria',
    exact: true,
  },
  {
    path: '/login',
    component: 'Login',
    label: 'Login',
    exact: true,
  },
  {
    path: '*',
    component: 'NotFound',
    label: 'Página não encontrada',
    exact: false,
  },
];

export default Routes;
