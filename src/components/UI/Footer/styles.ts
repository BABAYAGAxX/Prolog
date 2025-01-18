'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 0.001rem;
  background-color: #003333; // Changed to a much darker teal
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2.25rem;
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 1rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 2.5rem 0 2.2rem;
    gap: 2.25rem;
  }
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1.8rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 0.8rem;
  order: 1;
  margin-right: auto; // Add this line to push the logo to the left
  padding-right: 2rem; // Add some padding to the right for spacing

  @media (max-width: 768px) {
    max-width: 100%;
    order: 0;
    padding-right: 0; // Remove right padding on mobile
  }
`;

export const ContactBox = styled.div`
  background-color: #006666; // Keeping this lighter teal color
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: white;
  flex: 1;
  max-width: 600px;
  order: 2;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3a8a3e; // Darker green color for hover state
    }
  }

  @media (max-width: 768px) {
    order: 1;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const FooterNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.8rem;
  order: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    order: 2;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12rem;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: white;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

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
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;

