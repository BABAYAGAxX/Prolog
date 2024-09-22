'use client'
import React from 'react';
import {
  PageContainer,
  MainHeading,
  SubHeading,
  Paragraph,
  List,
  ListItem
} from './styles';

const SpecialtiesPage: React.FC = () => {
  return (
    <PageContainer>
      <MainHeading>All Specialties</MainHeading>
      <Paragraph>
        PM Billing is staffed by professionals with extensive expertise in the following specialties.
      </Paragraph>

      <List>
        <ListItem>Family Practice</ListItem>
        <ListItem>Internal Medicine</ListItem>
        <ListItem>Pediatrics</ListItem>
        <ListItem>Hospitalists</ListItem>
        <ListItem>Primary Care</ListItem>
        <ListItem>Behavioral Health</ListItem>
        <ListItem>Critical Care</ListItem>
        <ListItem>Cardiology</ListItem>
        <ListItem>Urology</ListItem>
        <ListItem>Physical Therapy</ListItem>
        <ListItem>Rehabilitation</ListItem>
        <ListItem>Neurology</ListItem>
        <ListItem>Osteopathic Medicine</ListItem>
        <ListItem>Pain Management</ListItem>
        <ListItem>Podiatry</ListItem>
      </List>

      <SubHeading>Your Specialty, Our Expertise</SubHeading>
      <Paragraph>
        Navigating the complexities of insurance coverage while providing affordable care can be challenging. PM Billing excels at securing favorable network contracts for your practice.
      </Paragraph>
      <Paragraph>
        Leveraging our established relationships with various insurance companies and networks, we negotiate advantageous contracts and rates for your services. Understanding the intricacies of contracting and credentialing is essential for obtaining optimal rates, and managing this effectively requires significant expertise.
      </Paragraph>
      <Paragraph>
        Securing the right contract is crucial for establishing a profitable relationship with your desired networks. Starting with an unfavorable contract can be detrimental and difficult to amend. PM Billing leverages our connections to ensure your practice benefits from the best possible agreements.
      </Paragraph>
    </PageContainer>
  );
};

export default SpecialtiesPage;
