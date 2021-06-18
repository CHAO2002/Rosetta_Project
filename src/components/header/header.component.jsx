import React from 'react';

import ControllPanel from '../../components/controll-panel/controll-panel.component';
import githubLogo from '../../github_logo.png';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={githubLogo} alt="Logo" />
      <ControllPanel></ControllPanel>
    </div>
  );
};

export default Header;