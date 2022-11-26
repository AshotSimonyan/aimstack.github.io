import Link from 'next/link'
import {HeaderStyle, HeaderContent, Logo, HeaderNav, HeaderButton} from './Header.style'
import {Container} from "styles/Foundations";
import Image from 'next/image'
import {navList} from "../Layout/config";
import LogoImage from "public/images/static/main/logo.svg";


const Header = () =>{
    return (
        <HeaderStyle>
            <Container css={{height: '100%'}}>
                <HeaderContent>
                    <Logo>
                        <Link href="/" className='logo'>
                            <Image   src={LogoImage}  alt='AimStack' width="156" height="37"/>
                        </Link>
                    </Logo>
                    <HeaderNav>
                        <div className="nav-inner">
                            <ul className="nav-list">
                                {navList.map(({ to, title }) => {
                                    return (
                                        <li key={to} onClick={() => {}}>
                                            {title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </HeaderNav>
                    <HeaderButton>

                    </HeaderButton>
                </HeaderContent>
            </Container>
        </HeaderStyle>
    )
}

export default Header
