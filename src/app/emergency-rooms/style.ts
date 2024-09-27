import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
    background-color: #f9f9f9;
`;

export const Section = styled.section`
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 1rem 0;
`;

export const ListItem = styled.li`
    margin: 0.5rem 0;
    padding-left: 1.2rem;
    position: relative;

    &::before {
        content: '✓'; /* You can change this to any other symbol or use an icon */
        position: absolute;
        left: 0;
        color: #4CAF50; /* Green color for the bullet */
    }
`;
