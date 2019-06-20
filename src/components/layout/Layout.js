import React from 'react';
import AuxComponent from '../../hoc/AuxComponent';
import classes from './Layout.css';

const layout = (props) => (
  <AuxComponent>
  <div>Toolbar, Sidedrawer, Backdrop</div>
  <main className={classes.Content}>{props.children}</main>
  </AuxComponent>
);

export default layout;

