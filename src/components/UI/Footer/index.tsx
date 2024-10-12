import Image from 'next/image';
import Link from 'next/link';

const linksArr = [
  {
    title: 'About us',
    links: ['Contact us', 'Phone Number', 'Email'],
  },
  {
    title: 'Services',
    links: [
      { name: 'Healthcare Systems', href: '/services/healthcare-systems' },
      { name: 'Hospitals', href: '/services/hospitals' },
      { name: 'Nursing Home', href: '/services/nursing-home' },
      { name: 'Emergency Rooms', href: '/services/emergency-rooms' },
      { name: 'Private Practices', href: '/services/private-practices' },
      { name: 'All Specialties', href: '/services/all-specialties' },
    ],
  },
];

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
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <ImageContainer>
              <Image src="/images/PM-Footer.png" width={500} height={300} alt='PM BILLING LOGO'/>
            </ImageContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, j) => (
                      <li key={j}>
                        {l.title === 'Services' ? (
                          <Link href={link.href}>{link.name}</Link>
                        ) : link === 'About us' ? (
                          <Link href="/about">{link}</Link>
                        ) : (
                          link
                        )}
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>English (United States)</h3>
            </Translator>
            <CopyRight>
              PM Billing.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;