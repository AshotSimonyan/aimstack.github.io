import {styled, keyframes} from "styles";

const copyAnimation = keyframes({
    '0%': { opacity: '0' },
    '10%': { opacity: '1' },
    '90%': { opacity: '1' },
    '100%': { opacity: '0' },
});

const QuickStartStyle = styled("section", {
    position: 'relative',

    '.hljs': {
        marginBottom: '20px',
        borderRadius: '$1',
        padding: '$4'
    },
    '.float-text': {
        float: 'left',
        width: '45%',

        '@bp1': {
            width: '100%',
        }
    }
})
const QuickStartInner = styled("div", {
    overflow: 'hidden'
})

const Left = styled("div", {
    width: '47%',
    paddingTop: '80px',
    paddingBottom: '$9',
    float: 'left',

    '@bp1': {
        width: '100%',
        float: 'none',
        textAlign: 'center'
    }
})

const Right = styled("div", {
    float: 'right',
    marginLeft: '80px',

    '@bp1': {
        float: 'none',
        marginLeft: '0',
    }
})


const CodeBlockStyle = styled("div", {
    paddingTop: '$5'
})


const HighlightWrapper = styled("div", {
    position: 'relative',

    button: {
        position: 'absolute',
        right: '0',
        top: '8px',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    },

    '.copied': {
        display: 'block',
        opacity: '0',
        position: 'absolute',
        right: '0',
        top: '-20px',
        animation: `${copyAnimation} 2.5s ease 0s alternate`,
        color: '$secondary',
        fontSize: '$1',
        fontWeight: '$2',
        transition: '$main',
        zIndex: 10
    }
})

export {QuickStartStyle, QuickStartInner, Left, Right, HighlightWrapper, CodeBlockStyle}
