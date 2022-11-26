import {styled} from "styles";

const DemoStyle = styled("section", {
    padding: '44px 0 100px',
    backgroundColor: '$darkBlue',
    color: '$white'
})

const DemoList = styled("ul", {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-24px',
})

const DemoItem = styled("li", {
    width: 'calc((100% / 4) - 24px)',
    marginLeft: '24px',
    marginBottom: '24px',


    '& a': {
        backgroundColor: '$bigStone',
        display: 'block',
        height: '100%',
        borderRadius: '$1',
        transition: '$main',

        '& .inner': {
            padding: '$6'
        },

        '&:hover': {
            backgroundColor: '$bigStoneHover',
        }
    },
    '& img': {
        display: 'block',
        borderRadius: '$1 $1 0 0',
    }
})

export {DemoStyle, DemoList, DemoItem}
