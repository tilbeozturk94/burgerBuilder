import React from 'react';
import AuxComponent from '../../hoc/AuxComponent';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <AuxComponent>
  <Toolbar/>
  <main className={classes.Content}>{props.children}</main>
  </AuxComponent>
);

export default layout;

