import { styled } from 'styles';

const IntegrationsStyle = styled('section', {
  py: '$10',
  backgroundColor: '$white500',
  boxShadow: '$1',
});
const Slider = styled('div', {});
const SliderItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'visible !important',
  // height: '250px',
  // width: '250px',

  img: {
    width: '65px !important',
  },
});

export { IntegrationsStyle, Slider, SliderItem };
