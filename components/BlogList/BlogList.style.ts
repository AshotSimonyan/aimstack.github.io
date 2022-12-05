import { styled } from 'styles';

const BlogListStyle = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-32px',

  '@bp1': {
    marginLeft: '-54px',
  },

  '@bp3': {
    marginLeft: '0',
  },
})
const BlogItem = styled('li', {
  width: 'calc((100% / 3) - 32px)',
  marginLeft: '24px',
  marginBottom: '24px',

  '@bp1': {
    width: 'calc((100% / 2) - 54px)',
    marginLeft: '54px',
    marginBottom: '54px',
  },
  '@bp3': {
    width: '100%',
    marginLeft: '0',
    marginBottom: '48px',
  },
})

export {BlogListStyle, BlogItem}

