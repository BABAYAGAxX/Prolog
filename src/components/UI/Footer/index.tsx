import Image from 'next/image';
import Link from 'next/link';
import {
  Wrapper,
  Inner,
  FooterMainContent,
  FooterMiddle,
  ImageContainer,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  CopyRight,
  ContactBox
} from './styles';

const linksArr = [
  {
    title: 'Services',
    links: [
      { name: 'Healthcare Systems', href: '/services/healthcare-system' },
      { name: 'Hospitals', href: '/services/hospitals' },
      { name: 'Nursing Home', href: '/services/nursing-homes' },
      { name: 'Emergency Rooms', href: '/services/emergency-rooms' },
      { name: 'Private Practices', href: '/services/private-practices' },
      { name: 'All Specialties', href: '/services/all-specialties' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {name: '+1(866)-886-5697', href: 'tel:+18668865697'},
      {name: 'vserve@pmbilling.us', href: 'mailto:vserve@pmbilling.us'}
    ],
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <ImageContainer>
              <Image src="/images/PM-Footer-1.png" width={500} height={300} alt='PM BILLING LOGO'/>
            </ImageContainer>
            <ContactBox>
              <h2>Contact Us TODAY!!!</h2>
                <p>
                  Contact PM Billing today at +1(866)-886-5697 for your consultation. We will help you increase 
                  your cash and patient flow while also helping you to streamline your work. Our team is more 
                    than just a billing company. Contact us to learn more about how we can help you.
                </p>
              <button 
                onClick={() => window.location.href = 'mailto:vserve@pmbilling.us?subject=Schedule%20Consultation'}
              >
                  Schedule An Appointment
              </button>
</ContactBox>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, j) => (
                      <li key={j}>
                        {link.href ? (
                          <Link href={link.href}>{link.name}</Link>
                        ) : (
                          link.name
                        )}
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              PM Billing - All Rights Reserved
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

