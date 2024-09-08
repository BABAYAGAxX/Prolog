'use client';
import Image from 'next/image';
import {
  Wrapper,
  BriefNote,
} from './styles';
import MaskText from '@/components/Common/MaskText';

import {
  desktopBriefNotePhrase,
  mobileBriefNotePhrase,
} from './constants';
import { useIsDesktop } from '@/lib/hooks';
const ServiceProvider = () => {
  const isDesktop = useIsDesktop()

  return (
    <Wrapper>
      <BriefNote>
        {!isDesktop ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
    </Wrapper>
  );
};

export default ServiceProvider;