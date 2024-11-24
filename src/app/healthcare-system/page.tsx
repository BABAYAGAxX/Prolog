'use client'

import {
  PageContainer,
  MainHeading,
  SubHeading,
  Paragraph,
  List,
  ListItem,
  Highlight,
  Card
} from './styles'

export default function HealthcareSystem() {
  return (
    <PageContainer>
      <MainHeading>Healthcare System</MainHeading>

      <Paragraph>
        PM Billing provides a variety of customized medical billing solutions designed to meet the specific needs of your healthcare system. Our services include seamless billing, accounts receivable (AR) recovery, and error reduction, ensuring quicker payments tailored to your requirements.
      </Paragraph>

      <Paragraph>
      We provides a variety of customized medical billing solutions designed to meet the specific needs of your healthcare system. Our services include seamless billing, accounts receivable (AR) recovery, and error reduction, ensuring quicker payments tailored to your requirements.
      </Paragraph>

      <Paragraph>
      We help maintain an efficient payment and expense tracking system, potentially increasing your reimbursements by over 25%. Our comprehensive services include revenue cycle management, AR recovery, medical records review, in-patient DRG review, credentialing, and prior authorization services.
      </Paragraph>

      <SubHeading>Medical Billing Services PM Billing Offers</SubHeading>

      <List>
        <ListItem>
          <Card><strong>Patient Registration:</strong> Collect patient demographics and insurance information, and record them into the billing software with up to a 99% accuracy rate.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Insurance Verification:</strong> Verify the insurance eligibility and benefits before submitting claims to avoid any delays in reimbursement.          </Card>
        </ListItem>
        <ListItem>
          <Card><strong>Charge Entry:</strong> Enter the provided services for the specific date of service with accurate coding and CPT codes, after verifying correct coding.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Claim Submission:</strong> PM Billing submits received charges and billing to insurance companies within 48 hours.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Payment Posting:</strong> Record payments received from the payer or patient in the form of ERA/EOB within 24 hours of receipt.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Denial Management:</strong> Handle any claim denials and resubmit or appeal within 24 hours to avoid delays in the payment cycle.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Patient Billing:</strong> Generate and send invoices to the patient for any remaining balance, and follow up on them.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Provider Credentialing:</strong> Provide credentialing services for all payers/States.</Card>
        </ListItem>
        <ListItem>
          <Card><strong>Reporting:</strong> Provide weekly, bi-weekly, and monthly financial reports with a complete overview of the account.</Card>
        </ListItem>
      </List>

    </PageContainer>
  )
}
