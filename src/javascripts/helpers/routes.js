import Home from 'javascripts/pages/home';
import Contact from 'javascripts/pages/contact';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/contato',
    component: Contact,
    exact: true
  }
];

export default Routes;
