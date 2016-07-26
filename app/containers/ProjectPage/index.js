/*
 *
 * ProjectPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProjectPage from './selectors';
import styles from './styles.css';

export class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.projectPage}>
      This is ProjectPage container !
      </div>
    );
  }
}

const mapStateToProps = selectProjectPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
