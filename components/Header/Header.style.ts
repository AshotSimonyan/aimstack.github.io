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
const HeaderNav = styled("nav", {
    display: "flex",
    justifyContent: "center",
    flex: 3,

    '.nav-list': {
        display: "flex",

        'li': {
            cursor: "pointer",
            '&:not(:last-child)': {
                marginRight: '32px'
            }
        }
    },

    '@bp1': {
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        overflowY: "auto",
        zIndex: 10,
        height: "0",
        transition: "height 0.5s",
        backgroundColor: "$white",
        flexDirection: 'column',
        justifyContent: 'space-between',

        '.open &': {
            height: "100vh",
        },
        ".nav-inner": {
            width: '100%',
            flexDirection: "column",
            alignItems: "inherit",
            justifyContent: "space-between",
            padding: "110px 20px 0",
        },
        ".nav-list": {
            flexDirection: "column",

            alignItems: "flex-start",
            "> li": {
                marginRight: "0",
                fontSize: "$2",
                fontWeight: "$3",
                width: "100%",
                marginBottom: "24px",
            }
        }
    }


})
const Logo = styled("div", {
    flex: 1,

    '& .logo': {
        maxWidth: "158px",
        width: "100%",
        display: "block",
    },

    '@bp1': {
        position: 'relative',
        zIndex: 11,
    }

})

const HeaderButton = styled("div", {
    span: {
        span: {
            display: 'flex',
            alignItems: 'center',
        }
    },
    '&.desktop-btn': {
        span: {
            span: {
                justifyContent: 'flex-end',
            }
        },
    }
})

const ButtonMenu = styled("button", {
    display: 'none',

    '@bp1': {
        position: 'relative',
        zIndex: 11,
        display: 'inline-block',
        appearance: "none",
        border: "none",
        backgroundColor: "transparent",
        lineHeight: 1,
        cursor: "pointer",
    }
})

const MobileSocial = styled("ul", {
    display: 'none',

    '@bp1': {
        display: 'flex',
        justifyContent: 'center',
        py: '$6',

        "> li": {
            marginRight: "$6",
        }
    }
})


export {HeaderStyle, HeaderContent, Logo, HeaderNav, HeaderButton, ButtonMenu, MobileSocial}
