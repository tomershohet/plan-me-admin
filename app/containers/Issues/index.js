/*
 *
 * Issues
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectIssues from './selectors';
import styles from './styles.css';
import { Row, Col, Breadcrumb, PageHeader, small } from 'react-bootstrap';
import Issue from '../../components/Card/index.js';

export class Issues extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const breadcrumbInstance = (
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          Project
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Issues
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    return (
      <div className={styles.issues}>
        {breadcrumbInstance}
        <div className={styles.content}>
          <Row>
            <Col xs={12}>
              <Row><Col md={7}><h4>Project Issues</h4></Col></Row>

              <Row>
                <Issue title="Bar door won't close" img="http://localhost:14608/styles/img/demo/issues/bar.jpg" pr="1" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Floor are too shainy" img="http://localhost:14608/styles/img/demo/issues/floor.jpg" pr="1" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Microwave oven place missing" img="http://localhost:14608/styles/img/demo/issues/kitchen.jpg" pr="1" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Missing lights on main kitchen" img="http://localhost:14608/styles/img/demo/issues/kitchen_2.jpg" pr="2" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="TV Cable have no wall track" img="http://localhost:14608/styles/img/demo/issues/living_room.jpg" pr="2" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Safty alaram camera is missing from playroom" img="http://localhost:14608/styles/img/demo/issues/playroom.jpg" pr="2" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Stairs railing is loose" img="http://localhost:14608/styles/img/demo/issues/staris.jpg" pr="2" size="2" category="Category" description="Fix the good damm thing"/>
                <Issue title="Toilet won't flash well" img="http://localhost:14608/styles/img/demo/issues/bathroom.jpg" pr="2" size="2" category="Category" description="Fix the good damm thing"/>
                
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectIssues();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
