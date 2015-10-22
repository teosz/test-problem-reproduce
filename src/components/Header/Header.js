import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <br />
          Header
        </div>
      </div>
    );
  }

}

export default Header;
