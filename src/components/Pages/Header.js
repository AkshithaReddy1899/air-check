import React from 'react';

const Header = () => (
  <nav className="main-nav">
    <div>
      <i className="fas fa-chevron-left" />
      {new Date().getFullYear()}
    </div>
    <div>
      Countries Details
    </div>
    <div>
      <i className="fas fa-microphone" />
      &nbsp;&nbsp;&nbsp;
      <i className="fas fa-cog" />
    </div>
  </nav>
);

export default Header;
