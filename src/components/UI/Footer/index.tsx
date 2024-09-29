import Image from 'next/image';
import Link from 'next/link';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import PM_Billing from '../../../../public/images/PM-Logo.jpeg';

const linksArr = [
  {
    title: 'About us',
    links: ['Contact us', 'Phone Number', 'Email'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
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
        <FooterLogo>
          <Image src={raft_footer_logo} alt="raft_footer_logo" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <ImageContainer>
            <Image src="/path/to/image.jpg" width={500} height={300} alt='PM BILLING LOGO'/>
            </ImageContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
                        {link === 'About us' ? (
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
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              PM Billing.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;