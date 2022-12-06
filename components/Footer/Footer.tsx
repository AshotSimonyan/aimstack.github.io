import {
  FooterStyle,
  FooterTop,
  FooterBottom,
  FooterList,
  Logo,
  FooterSocial,
} from './Footer.style';
import { Container, Text } from 'styles/Foundations';
import Link from 'next/link';
import { Icon } from 'components/UIkit';
import { navList, socialList } from '../Layout/config';

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <FooterTop>
          <Logo>
            <Link href="/" className="logo">
              <picture>
                <source
                  media="(max-width: 1199px)"
                  srcSet="/images/static/main/aim-logo-resp.svg"
                />
                <img src="/images/static/main/aim-logo.svg" alt="Aimstack" />
              </picture>
            </Link>
          </Logo>
          <FooterList>
            {navList.map(({ to, title, external }) => {
              return (
                <li key={to} onClick={() => {}}>
                  <Link
                    href={to}
                    scroll={false}
                    target={external ? '_blank' : '_self'}
                  >
                  {title}
                  </Link>
                </li>
              );
            })}
          </FooterList>
          <FooterSocial>
            {socialList.map(({ icon, url }) => {
              return (
                <li key={icon}>
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    <Icon name={icon} color="white" />
                  </a>
                </li>
              );
            })}
          </FooterSocial>
        </FooterTop>
        <FooterBottom>
          <Text size={1}>Copyright © {new Date().getFullYear()} Aimstack</Text>
        </FooterBottom>
      </Container>
    </FooterStyle>
  );
};

export default Footer;
