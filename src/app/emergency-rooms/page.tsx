import React from 'react';
import { Container, Section, Title, List, ListItem } from './style';  

const EmergencyRooms: React.FC = () => {
    return (
        <Container>
            <Section>
                <Title>Emergency Rooms</Title>
                <p>
                    PM Billing provides emergency room billing services to the healthcare industry across the USA. 
                    PMB is trusted by large healthcare systems to deliver reliable billing solutions.
                </p>

                <h2>Freestanding Emergency Rooms</h2>
                <p>
                    Freestanding emergency rooms have become widely popular, especially in Texas, as they increase 
                    access to healthcare for communities. While freestanding ERs provide a vital resource, billing 
                    for emergency room services can be complex, making it challenging to secure maximum reimbursement.
                </p>

                <h2>Emergency Room Medical Billing Services PM Billing Offers</h2>
                <p>
                    PM Billing specializes in out-of-network billing and brings unique expertise in emergency room 
                    billing, setting us apart from other billing companies. Our comprehensive emergency room services include:
                </p>
                <List>
                    <ListItem>Patient Eligibility and Benefits Verification</ListItem>
                    <ListItem>Coding and Chart Auditing</ListItem>
                    <ListItem>Charge Entry</ListItem>
                    <ListItem>Claims Submission</ListItem>
                    <ListItem>Insurance Negotiations</ListItem>
                    <ListItem>Aggressive Follow-Up</ListItem>
                    <ListItem>Accounts Receivable Recovery</ListItem>
                    <ListItem>Underpaid Appeals</ListItem>
                    <ListItem>Accounts Receivable Analysis</ListItem>
                    <ListItem>Patient Billing</ListItem>
                </List>

                <p>
                    We can enhance your cash flow and reduce claim rejections by automating your emergency room billing 
                    with precise coding and strict adherence to payer regulations. PM Billing employs proven strategies 
                    for out-of-network negotiations, connecting you with the right resources to maximize your reimbursements.
                </p>

                <h2>Why Choose PM Billing for Emergency Billing Services?</h2>
                <p>
                    At PM Billing, we provide a comprehensive suite of Medical Billing and Revenue Cycle Management 
                    Solutions specifically designed to address the unique needs of healthcare organizations. By outsourcing 
                    your Emergency Room billing services to us, you benefit from our specialized expertise and advanced resources. 
                    Key reasons to partner with us include our commitment to HIPAA-compliant Emergency Room billing and 
                    our use of cutting-edge tools and technologies.
                </p>
                <p>
                    Our experts are available 24/7 to address your inquiries and deliver prompt billing services. We offer 
                    cost-effective and customized medical billing and coding solutions to meet your specific requirements.
                </p>
            </Section>
        </Container>
    );
};

export default EmergencyRooms;
