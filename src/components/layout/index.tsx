import React from 'react';

import './layout.scss';

function Layout({ children } : { children: React.ReactNode }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Layout;
