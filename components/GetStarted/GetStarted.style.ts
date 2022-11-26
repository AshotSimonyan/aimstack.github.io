import {styled} from "styles";

const GetStartedStyle = styled("section", {
    position: 'relative',

    '.hljs': {
        marginBottom: '20px',
        borderRadius: '$1',
        padding: '$4'
    }
})
const GetStartedInner = styled("div", {
    display: 'flex',
    alignItems: 'center'
})

const Left = styled("div", {
    flex: '1',
    marginRight: '80px'
})

const Right = styled("div", {
    flex: '1',
})

export {GetStartedStyle, GetStartedInner, Left, Right}
