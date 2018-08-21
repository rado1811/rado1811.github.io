import React from 'react';
import { NavLink } from 'reactstrap';
import Affiche from '../img/Bandeau_web.png';

const HomePage = () => (
  <NavLink href="/#/Events" >
    <img 
      src={Affiche}
      alt="Affiche_Teleteton"
      style={{ width: 'auto', height: '70vh'}}/>
  </NavLink>
);

export default HomePage;