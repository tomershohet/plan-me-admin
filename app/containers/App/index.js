/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationMenu from '../../components/NavigationMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames/bind';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, Image } from 'react-bootstrap';

import styles from './styles.css';
let cx = classNames.bind(styles);

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {navOpen:true};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({navOpen: !this.state.navOpen});
    console.log("open")
  }

  handleClose() { this.setState({navOpen: false}); }

  static propTypes = {
    children: React.PropTypes.node, 
  };

  render() {
   var { navOpen } = this.state;
   let navOpenClass = cx({
      'navOpen': navOpen,
      'navClosed' : !navOpen,
      'container' : true,
    });

    // var oldAppBar = (
    //     <MuiThemeProvider>
    //       <div>
    //         <NavigationMenu open={navOpen}/>
    //         <div>
    //           <AppBar 
    //             className={styles.AppBar} 
    //             style={{backgroundColor: '#2196F3'}} 
    //             onLeftIconButtonTouchTap={this.handleToggle}
    //             iconStyleLeft={{margin: '0px 0px 0px -25px', marginTop:'0px'}}
    //             titleStyle={{lineHeight:'46px', marginTop: '0px', color: '#fff'}} 
    //             title="My AppBar" 
    //             />
    //           <div className={navOpenClass}>
    //             {this.props.children}
    //           </div>
    //         </div>
    //       </div>
    //     </MuiThemeProvider>)

    return (
      <div>
        <Navbar fluid fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={require('./logo.png')}/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Project" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Taylor & Kayla Smith - Home remodeling</MenuItem>
                <MenuItem eventKey={3.2}>Bryan & Laura Williams - Home remodeling</MenuItem>
                <MenuItem eventKey={3.3}>Julia & Tiffany Johnson - Apartment remodeling</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}> Add New Project</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Log out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <NavigationMenu open={navOpen}/>
        <div style={{marginLeft: '220px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
