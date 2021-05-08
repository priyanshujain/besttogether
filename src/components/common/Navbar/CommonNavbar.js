import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
} from './style';



class CommonNavBar extends Component {
  render() {
    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>Best Together</Brand>
        </StyledContainer>
      </Nav>
    );
  }
}

export default CommonNavBar;
