import React from 'react';
import {HeroStyle, HeroContent} from "./Hero.style";
import {Text, Container} from "styles/Foundations";
import {Button} from "components/UIkit";


const Hero = () => {
    return (
        <HeroStyle>
            <Container>
                <HeroContent>
                    <Text as='h1' size={1} css={{marginBottom: '$6'}} >An easy-to-use & supercharged open-source experiment tracker</Text>
                    <Text as='p' size={5} css={{marginBottom: '48px'}} >Aim logs your training runs, enables a beautiful UI to compare them and an API to query them programmatically.</Text>
                    <Button as='a' href='https://github.com/aimhubio/aim' target='_blank' >Check out our Github</Button>
                </HeroContent>

            </Container>


        </HeroStyle>
    );
};

export default Hero;
