import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';
import ExternalLink from '@common/ExternalLink';


import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = [
  {
    name: 'Sessions',
    url: '#sessions',
  },
  { name: 'FAQ', url: '#faq' },
  { name: 'Volunteer', url: '/volunteer' },
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (name, url) => {
    if (url.includes('#')) {
      return (
        <AnchorLink href={url} onClick={this.closeMobileMenu}>
          {name}
        </AnchorLink>
      );
    } else {
      return (
        <ExternalLink href={url} onClick={this.closeMobileMenu}>
          {name}
        </ExternalLink>
      );
    }
  };

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.name)}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <NavItem key={index}>
            {this.getNavAnchorLink(navItem.name, navItem.url)}
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>Best Together</Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
