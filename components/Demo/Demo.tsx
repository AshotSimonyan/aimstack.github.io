import {DemoStyle, DemoList, DemoItem} from "./Demo.style";
import {Text, Container} from "styles/Foundations";
import React from "react";
import demoList from "./demoList";
import Image from "next/image";
import Link from "next/link";


const Demo = () => {
    return (
        <DemoStyle>
            <Container>
                <Text as='h2' size={1} css={{textAlign: 'center'}}>Demos</Text>
                <Text as='p' size={5} css={{margin: '0 auto 60px', textAlign: 'center', maxWidth: '560px'}} >Play with Aim before installing it!
                    Check out our demos to see the full functionality</Text>
                <DemoList>
                    {demoList.map(({title, description, name, url}) => {
                        return (
                            <DemoItem key={name}>
                                <Link href={url} target='_blank'>
                                    <Image className='img' src={`/images/static/demos/${name}.png`}  alt='AimStack' width={100} height={100} layout="responsive"/>
                                    <div className='inner'>
                                        <Text as='h4' size={5} css={{marginBottom: '$2', fontWeight: '$4'}} >{title}</Text>
                                        <Text size={7}>{description}</Text>
                                    </div>
                                </Link>
                            </DemoItem>
                        )
                    })}
                </DemoList>
            </Container>
        </DemoStyle>
    );
};

export default Demo;
