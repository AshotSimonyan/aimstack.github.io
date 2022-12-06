import React from 'react';
import { HeroStyle, HeroContent } from './Hero.style';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';

const Hero = () => {
  return (
    <HeroStyle>
      <Container>
        <HeroContent>
          <Text as="h1" size={10} css={{ marginBottom: '$6' }}>
            An easy-to-use & supercharged open-source experiment tracker
          </Text>
          <Text as="p" size={4} css={{ marginBottom: '48px' }}>
            Aim logs your training runs, enables a beautiful UI to compare them
            and an API to query them programmatically.
          </Text>
          <Button
            css={{ marginBottom: '$4' }}
            as="a"
            href="https://github.com/aimhubio/aim"
            target="_blank"
          >
            Check out our Github
          </Button>
          <div>
            <Button
              as="a"
              variant="outline"
              size={2}
              href="https://aimstack.io/aim-3-10-release-catboost-integration/"
              target="_blank"
            >
              Aim release <strong>3.10</strong>
            </Button>
          </div>
        </HeroContent>
      </Container>
    </HeroStyle>
  );
};

export default Hero;
