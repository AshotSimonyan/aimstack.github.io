import React from 'react';
import {WhyUseAimStyle, StepRow, Left, Right, ButtonLink} from './WhyUseAim.style';
import {Text, Container} from "styles/Foundations";
import {Icon} from "components/UIkit";
import stepsList from "./stepsConfig";
import Image from "next/image";

const WhyUseAim = () => {
    return (
        <WhyUseAimStyle>
            <Container>
                <Text as='h2' size={1} css={{textAlign: 'center', marginBottom: '100px'}}>Why use Aim?</Text>
                {stepsList.map(({name, title, list}) => {
                    return (
                        <StepRow key={name}>
                            <Left>
                                <Text size={4} css={{marginBottom: '$6', '& strong': {fontFamily: '$OpenSans800'}}} dangerouslySetInnerHTML={{ __html: title }}/>
                                <ul>
                                    {list.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })}
                                </ul>
                                <ButtonLink href='https://github.com/aimhubio/aim' target='_blank' css={{marginTop: '$6'}}>
                                    Check out our Github
                                    <Icon name='arrow' size={24} />
                                </ButtonLink>



                            </Left>
                            <Right>
                                <Image src={`/images/static/why-use-aim/${name}.png`}  alt='AimStack' width={605} height={360} />
                            </Right>

                        </StepRow>
                    )
                })}

            </Container>

        </WhyUseAimStyle>
    );
};

export default WhyUseAim;
