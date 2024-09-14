'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  background-color: #cbd5e1;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  width: 100%;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: black; /* Changed to black */
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 2fr 1fr;
  text-align: start;
  align-items: center;
  justify-content: center;
  gap: 1rem; 
`;

export const HeroContainerMobile = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem; 
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  text-align: start;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 4rem;
    letter-spacing: -0.1rem;
    color: black; /* Changed to black */
  }

  p {
    max-width: 41.75rem;
    color: black; /* Changed to black */
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: -0.02rem;
    font-style: italic;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
