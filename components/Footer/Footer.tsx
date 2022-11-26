import {FooterStyle, FooterTop, FooterBottom, Left, Right, FooterList, Logo, FooterSocial} from "./Footer.style";
import {Container, Text} from "styles/Foundations";
import Link from "next/link";
import Image from "next/image";
import {Icon} from "components/UIkit";
import {navList, socialList} from "../Layout/config";


const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <FooterTop css={{}}>
                    <Left>
                        <Logo css={{marginRight: '36px'}}>
                            <Link href="/" className='logo' >
                                <Icon name='aim' color='white' size={26}/>
                            </Link>
                        </Logo>
                        <FooterList>
                            {navList.map(({ to, title }) => {
                                return (
                                    <li key={to} onClick={() => {}}>
                                        {title}
                                    </li>
                                )
                            })}
                        </FooterList>
                    </Left>
                    <Right>
                        <FooterSocial>
                            {socialList.map(({ icon, url }) => {
                                return (
                                    <li key={icon} onClick={() => {}}>
                                        <a href={url} rel='noopener noreferrer' target="_blank">
                                            <Icon name={icon} color='white'/>
                                        </a>
                                    </li>
                                )
                            })}
                        </FooterSocial>
                    </Right>
                </FooterTop>
                <FooterBottom>
                    <Text size='8'>Copyright © 2022 Aimstack</Text>
                </FooterBottom>
            </Container>

        </FooterStyle>
    )
}

export default Footer
