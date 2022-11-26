import {styled} from "styles";

const FooterStyle = styled("footer", {
    backgroundColor: '$darkBlue',
})

const FooterTop = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "$white",
    py: '27px',
    borderBottom: "1px solid $white100"
})

const Left = styled("div", {
    display: "flex",
    justifyContent: "space-between"
})

const Right = styled("div", {})
const FooterList = styled("ul", {
    display: "flex",

    'li': {
        cursor: "pointer",
        marginRight: '42px'
    }
})

const FooterSocial = styled("ul", {
    display: "flex",

    'li': {
        cursor: "pointer",
        '&:not(:last-child)': {
            marginRight: '$6'
        }
    }
})

const FooterBottom = styled("div", {
    py: '$4',
    color: '$white500',
    textAlign: "center"
})

const Logo = styled("div", {})

export {FooterStyle, FooterTop, FooterBottom, Left, Right, FooterList, Logo, FooterSocial}
