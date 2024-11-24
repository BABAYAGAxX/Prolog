import styled from 'styled-components'

// Global container
export const PageContainer = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #cbd5e1; /* Added background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

// Main title styling
export const MainHeading = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #3498db;
  padding-bottom: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
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

// Paragraph styling
export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
`

// Highlighted text
export const Highlight = styled.span`
  font-weight: bold;
  color: #27ae60;
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
