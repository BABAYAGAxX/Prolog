import styled from 'styled-components'

// Global container for the page
export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #cbd5e1; /* Added background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
`

// Subheading styling
export const SubHeading = styled.h2`
  font-size: 2rem;
  color: #34495e;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: left;
  border-left: 4px solid #3498db;
  padding-left: 1rem;
`

// List styling
export const List = styled.ul`
  margin-left: 2rem;
  margin-bottom: 2rem;
`

// List item styling
export const ListItem = styled.li`
  margin-bottom: 1rem;
`

// Card-like container for each list item
export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s;
  cursor: default; /* Ensures the default cursor is used */

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`
