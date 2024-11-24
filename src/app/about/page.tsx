'use client'

import React from 'react';
import {
  PageContainer,
  MainHeading,
  SubHeading,
  Paragraph,
  List,
  ListItem,
  ContactButton
} from './styles';

const KeystoneFinancial: React.FC = () => {
  return (
    <PageContainer>
      <MainHeading>Keystone of Your Financial Performance</MainHeading>

      <SubHeading>PMB Team</SubHeading>
      <Paragraph>
        Our team of AAPC-certified coders and expert billers possess the knowledge and experience to provide your facility with precise and thorough work. Leveraging our extensive expertise, we communicate with your team and train them in best practices to boost your revenue.
      </Paragraph>
      <Paragraph>
        With years of experience in the medical billing industry, we have established enduring relationships with both insurance companies and our clients. Our aim is to become a recognized name within the networks, allowing us to effectively advocate for our clients&apos; needs and deliver outstanding results. Unlike other billing companies, our commitment to quality service remains unwavering over time.
      </Paragraph>

      <SubHeading>PMB Vision</SubHeading>
      <Paragraph>
        We build long-term relationships with our clients by consistently maintaining high-quality service. We also offer financial consulting to providers facing challenges, allowing you to focus on what you do best: caring for your community.
      </Paragraph>

      <SubHeading>PMB Mission</SubHeading>
      <Paragraph>
        Billing is the financial heartbeat of your facility. Our goal is to help you maximize revenue through accurate coding and timely billing. Your success is our priority, and we are fully committed to diligently pursuing the returns you deserve.
      </Paragraph>

      <SubHeading>Our Services</SubHeading>
      <List>
        <ListItem>Accurate coding and billing</ListItem>
        <ListItem>Revenue cycle management</ListItem>
        <ListItem>Financial consulting</ListItem>
        <ListItem>Team training and best practices</ListItem>
        <ListItem>Insurance company negotiations</ListItem>
        <ListItem>Long-term client relationships</ListItem>
      </List>

      <SubHeading>Contact Us</SubHeading>
      <Paragraph>
        Let us become an extension of your team. We can help you save time and increase revenue, enabling you to focus on delivering quality patient care. We take pride in supporting our clients&apos; growth.
      </Paragraph>
      {/* Wrap the button with an <a> tag */}
      <a href="mailto:PMbilling786@gmail.com">
        <ContactButton>Contact Us Today</ContactButton>
      </a>
    </PageContainer>
  );
};

export default KeystoneFinancial;
