'use client'
import React from 'react';
import { 
  PageContainer, 
  MainHeading,  
  SubHeading, 
  Paragraph, 
  List, 
  ListItem 
} from './styles'

const PrivatePractices: React.FC = () => {
  return (
    <PageContainer>
      <MainHeading>Private Practices</MainHeading>

      <Paragraph>
        PM Billing proudly serves a diverse range of medical facilities, including private practices and healthcare systems. Our extensive experience in medical billing and coding keeps us at the forefront of healthcare advancements. Private practices often face revenue challenges due to limited knowledge of revenue cycle management, and we are here to address these issues comprehensively.
      </Paragraph>

      <SubHeading>Private Practice Medical Billing Services We Offer</SubHeading>

      <Paragraph>
        Errors in documentation are a major cause of revenue issues in private practice revenue cycle management. At PM Billing, we focus on training your team to understand the critical importance of accurate documentation, significantly increasing the likelihood of claim acceptance. We proudly maintain a 99.9% acceptance rate for billed claims. In the rare event of a claim denial, our accounts receivable team promptly corrects the issue and resubmits the claim. We ensure that all claims for practices are filed within 24 hours.
      </Paragraph>

      <Paragraph>
        In addition to documentation support, we assist in gathering information from insurance companies regarding patient eligibility and benefits. This helps prevent the common issue of overcharging due to incomplete information, which can erode patient trust and lead to refund complications.
      </Paragraph>

      <Paragraph>
        PM Billing keeps you updated on the latest coding practices and compliance requirements. Incorrect coding can lead to lost revenue, but with our expertise, you&apos;ll be informed of the most effective codes and best practices to optimize your revenue.
      </Paragraph>

      <Paragraph>
        We manage patient statements, handle patient calls, and aggressively pursue appeals, alleviating the time-consuming billing tasks from your workload. This not only ensures timely revenue collection but also allows your staff to focus on patient care, enhancing patient satisfaction and workflow.
      </Paragraph>

      <SubHeading>Contact PM Billing for Private Practice Billing</SubHeading>

      <Paragraph>
        Switching to PM Billing offers numerous advantages. Our strong industry relationships and unmatched service quality in medical billing can help you boost cash flow and improve patient flow. Let us streamline your billing processes and provide the insights you need to enhance your practice&apos;s financial health.
      </Paragraph>
    </PageContainer>
  );
};

export default PrivatePractices;
