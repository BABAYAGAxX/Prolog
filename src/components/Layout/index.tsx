'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '@/components_old/Layout/registry';
import { GlobalStyles } from './GlobalStyles';
import { Header, Footer, Preloader } from '..';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
