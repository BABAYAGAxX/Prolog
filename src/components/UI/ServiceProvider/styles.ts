'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`

`;

export const BriefNote = styled.div`
  max-height: 54.75rem;
  padding: 2.25rem 6rem;
  background: #ADD8E6;

  p {
    color: var(--Background, #070606);
    font-size: 7rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 4rem;
    p {
      font-size: 2rem;
    }
  }
`;