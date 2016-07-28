/**
*
* NavigationMenu
*
*/

import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import BuildIcon from 'material-ui/svg-icons/action/build';
import MapIcon from 'material-ui/svg-icons/maps/map';
import ContactsIcon from 'material-ui/svg-icons/action/perm-contact-calendar';
import { Tab, Row, Nav, Col, NavItem, Glyphicon } from 'react-bootstrap';

import styles from './styles.css';

class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    const { open } = this.props;


    // const oldNav = (
    //   <Drawer
    //       containerClassName={styles.navigationMenu}
    //       open={open}>
    //       <MenuItem primaryText="Overview" leftIcon={<HomeIcon />} />
    //       <MenuItem primaryText="Tasks" leftIcon={<AssignmentIcon />} />
    //       <MenuItem primaryText="Issues" leftIcon={<BuildIcon />} />
    //       <MenuItem primaryText="Plans" leftIcon={<MapIcon />} />
    //       <MenuItem primaryText="Contacts" leftIcon={<ContactsIcon />} />

    //   </Drawer>
    //   )

    //   const newNav = (
    //     <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
    //     <Row className="clearfix">
    //       <Col sm={1} style={{'backgroundColor': '#fff', height: '1200px'}}>
    //         <Nav bsStyle="pills" stacked>
    //           <NavItem eventKey="first">
    //             Tab 1
    //           </NavItem>
    //           <NavItem eventKey="second">
    //             Tab 2
    //           </NavItem>
    //         </Nav>
    //       </Col>
    //     </Row>
    //   </Tab.Container>)

    return (
        <Nav bsClass={styles.navigationMenu} pullLeft={true} stacked activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} title="Overview"><Glyphicon glyph="home"/> <span className={styles.MenuItem}>Overview</span></NavItem>
          <NavItem eventKey={2} title="Tasks"><Glyphicon glyph="list-alt" /> <span className={styles.MenuItem}>Tasks</span></NavItem>
          <NavItem eventKey={3} title="Issues"><Glyphicon glyph="wrench" /> <span className={styles.MenuItem}>Issues</span></NavItem>
          <NavItem eventKey={3} title="Plans"><Glyphicon glyph="home" /> <span className={styles.MenuItem}>Plans</span></NavItem>
          <NavItem eventKey={3} title="Contacts"><Glyphicon glyph="object-align-top" /> <span className={styles.MenuItem}>Contacts</span></NavItem>
        </Nav>
    );
  }
}

export default NavigationMenu;






