'use client';
import Lottie from 'lottie-react';
import animationData from './animation.json';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './const';
import MaskText from '@/components/Common/MaskText';
import {
  Wrapper,
  Inner,
  HeroContainer,
  HeroContainerMobile,
  HeroTextContainer,
} from './styles'; // Import styled components'
import { useIsDesktop } from '@/lib/hooks';
import { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const isDesktop = useIsDesktop()
  return (
    <Wrapper>
      <Inner>
        <>
          {!isDesktop ? (
            <HeroContainerMobile>
              <HeroTextContainer>
                <MaskText phrases={mobilePhrases} tag="h1" />
                <MaskText phrases={mobileParagraphPhrases} tag="p" />
                <Lottie animationData={animationData} loop={true} />
              </HeroTextContainer>
            </HeroContainerMobile>
          ) : (
            <HeroContainer>
              <HeroTextContainer>
                <MaskText
                  phrases={phrases}
                  tag="h1"
                />
                <MaskText
                  phrases={paragraphPhrases}
                  tag="p"
                />
              </HeroTextContainer>
              <Lottie animationData={animationData} loop={true} />
            </HeroContainer>
          )}

        </>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
