import React from 'react';
import { NavLink } from 'reactstrap';
import Affiche from '../img/affiche.jpg';

const HomePage = () => (
  <NavLink href="/Events" >
    <img 
      src={Affiche}
      alt="Affiche_Teleteton"
      style={{ width: 'auto', height: '100vh'}}/>
  </NavLink>
);

export default HomePage;