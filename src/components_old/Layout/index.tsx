'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from './registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Preloader } from '..';
import Header from '@/components/UI/Header';
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
          {/* <Footer /> */}
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export Layout;
