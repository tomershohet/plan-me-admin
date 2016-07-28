/**
*
* Card
*
*/

import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './styles.css';
let cx = classNames.bind(styles);

class Card extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { size, img, pr, title, category, description } = this.props;

    return (
        <Col md={4} sm={12} xs={12}>
          {/* product */}
          <div className={styles.content}>
              <Row>
                  <Col md={6} sm={12} xs={12}>
                      <div className={styles.image}> 
                          <img src={img} alt="194x228" className="img-responsive"/> 
                              <span className={cx({priority: true, pr1 : pr == 1, pr2 : pr == 2})}>
                                  PR {pr}
                              </span>
                      </div>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                      <div className={styles.deatil}>
                          <h5 className="name">
                              {title}
                              <a href="#">
                                  <span>{category}</span>
                              </a>
                          </h5>
                      </div>
                      <div className={styles.description}>
                          <p>{description}</p>
                      </div>
                      <div className={styles.button}>
                          <Row>
                              <Col md={6} sm={6} xs={6}>
                                  <Button bsStyle="success">Update Status</Button>
                              </Col>
                          </Row>
                      </div>
                  </Col>
              </Row>
          </div>
          {/* end product */}
        </Col>
    );
  }
}

export default Card;
