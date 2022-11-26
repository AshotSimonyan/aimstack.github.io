import React from 'react';
import {GetStartedStyle, GetStartedInner, Left, Right} from "./GetStarted.style";
import {Container, Text} from "styles/Foundations";
import Highlight from 'react-highlight'


/*
 1   from aim import Run
 2
 3   run = Run()
 4
 5   # Save inputs, hparams or any other 'key: value'
 6   pairs
 7   run['hparams'] = hyperparam_dict
 8
 9   for step in range(10):
10   # Log metrics to visualize performance
11   run.track(metric_value, name='metric_name',
12   epoch=epoch_number)
* */
const GetStarted = () => {
    return (
        <GetStartedStyle>
            <Container>
                <GetStartedInner>
                    <Left>
                        <Text as='h3' size={3} css={{'& span': {backgroundColor: '$secondary', color: '$white'}}}>
                            Get started <br/><span>in under a minute</span> and on <span>any environment</span>
                        </Text>
                    </Left>
                    <Right>
                        <Highlight>
                            {`pip install aim`}
                        </Highlight>
                        <Highlight>
                            {`from aim import Run

run = Run()

# Save inputs, hparams or any other 'key: value' pairs
run['hparams'] = hyperparam_dict

for step in range(10):
# Log metrics to visualize performance
    run.track(metric_value, name='metric_name',
    epoch=epoch_number)`}
                        </Highlight>
                        <Highlight>
                            {`aim up`}
                        </Highlight>
                    </Right>
                </GetStartedInner>
            </Container>
        </GetStartedStyle>
    );
};

export default GetStarted;
