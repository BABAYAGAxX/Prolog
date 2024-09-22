'use client'

import {
  PageContainer,
  SubHeading,
  List,
  ListItem,
  Card
} from './styles'

export default function WhyChoosePMBilling() {
  return (
    <PageContainer>
      <SubHeading>Why Choose PM Billing?</SubHeading>

      <List>
        <ListItem><Card>Our team ensures that denials remain below 20%.</Card></ListItem>
        <ListItem><Card>Reduce manual entry and improve RCM system efficiency.</Card></ListItem>
        <ListItem><Card>Out-of-network negotiations.</Card></ListItem>
        <ListItem><Card>Payment posting and adjustments for refunds to improve cash flow.</Card></ListItem>
        <ListItem><Card>A dedicated account manager for all your requirements.</Card></ListItem>
        <ListItem><Card>Provide high-quality, error-free billing and collection services.</Card></ListItem>
        <ListItem><Card>We consistently increase our clients&apos; collection ratios through a faster accounts receivable process and timely follow-up.</Card></ListItem>
        <ListItem><Card>Use the latest technology and tools.</Card></ListItem>
        <ListItem><Card>Offer services that can be easily scaled at any time.</Card></ListItem>
      </List>
    </PageContainer>
  )
}
