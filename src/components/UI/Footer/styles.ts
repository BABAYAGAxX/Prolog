'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
    align-items: flex-start;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    a {
      color: inherit;
      text-decoration: none;
    }

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 0.875rem;
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;