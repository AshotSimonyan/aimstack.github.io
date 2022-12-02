import { styled } from 'styles';

const TextStyle = styled('p', {
  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
        '@bp2': {
          fontSize: '$2',
        },
      },
      4: {
        fontSize: '$4',
        '@bp1': {
          fontSize: '$3',
        },
        '@bp2': {
          fontSize: '$2',
        },
      },
      5: {
        fontSize: '$5',
        fontWeight: '$3',
        '@bp2': {
          // fontSize: '$m4'
        },
      },
      6: {
        fontSize: '$6',
        fontWeight: '$3',
        '@bp2': {
          fontSize: '$4',
        },
      },
      8: {
        fontSize: '$8',
        fontWeight: '$5',
        lineHeight: '1.5',
        '@bp2': {
          fontSize: '$7',
        },
      },
      9: {
        fontSize: '$9',
        fontWeight: '$5',
        '@bp1': {
          fontSize: '$8',
        },
        '@bp2': {
          fontSize: '$7',
        },
      },
      10: {
        fontSize: '$10',
        fontWeight: '$5',
        lineHeight: '1.25',
        '@bp1': {
          fontSize: '$8',
        },
        '@bp2': {
          fontSize: '$7',
        },
      },
    },
  },
});

export default TextStyle;
