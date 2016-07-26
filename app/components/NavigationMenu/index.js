/**
*
* NavigationMenu
*
*/

import React from 'react';
import { Drawer, MenuItem } from 'material-ui';


import styles from './styles.css';

class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Drawer
        docked={true}
        open={true}>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </Drawer>
    );
  }
}

export default NavigationMenu;
