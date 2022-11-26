import React, {FC, ReactNode} from 'react';
import {LayoutStyle, Wrapper} from "./Layout.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useRouter} from "next/router";
import Image from "next/image";


interface ILayout {
    children: ReactNode
}
const Layout: FC<ILayout> = ({children}) => {
    const router = useRouter()
    const admin = router?.pathname === '/admin'

    return (
        <LayoutStyle>
            <Image
                className='bg-top'
                layout="fill"
                objectFit='cover'
                objectPosition='top'
                src={'/images/static/main/main-bg.png'}
                alt={''}
            />
            <Wrapper>
                {
                    !admin &&
                    <Header/>
                }
                {children}

                {
                    !admin &&
                    <Footer />
                }
            </Wrapper>

            <Image
                className='bg-top'
                layout="fill"
                objectFit='cover'
                objectPosition='bottom'
                src={'/images/static/main/lines-bg.png'}
                alt={''}
            />
        </LayoutStyle>
    );
};

export default Layout;
