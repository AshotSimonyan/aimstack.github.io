import {styled} from "styles";

const HeaderStyle = styled("header", {
    height: '72px',
})
const HeaderContent = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%"

})
const HeaderNav = styled("div", {
    display: "flex",
    justifyContent: "center",
    flex: 3,

    '& .nav-list': {
        display: "flex",

        'li': {
            cursor: "pointer",
            '&:not(:last-child)': {
                marginRight: '40px'
            }
        }
    },

})
const Logo = styled("div", {
    flex: 1,

    '& .logo': {
        maxWidth: "158px",
        width: "100%",
        display: "block",
    },

})

const HeaderButton = styled("div", {
    flex: 1,
})


export {HeaderStyle, HeaderContent, Logo, HeaderNav, HeaderButton}
