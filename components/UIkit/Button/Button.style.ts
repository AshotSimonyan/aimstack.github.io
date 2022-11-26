import {styled} from "styles";

const ButtonStyle = styled("button", {
    // mini reset
    appearance: "none",
    border: "none",
    backgroundColor: "transparent",
    lineHeight: 1,
    cursor: "pointer",
    borderRadius: "$1",
    px: "$6",
    display: 'inline-block',

    '&.a' : {

    },

    variants: {
        size: {
            1: {
                height: '53px',
                lineHeight: '53px',
                fontSize: "$6",
            }
        },
        variant: {
            primary: {
                backgroundColor: "$primary",
                color: "$white",
                "&:hover": {
                    // backgroundColor: "$primaryDark"
                }
            }
        },
    },

    defaultVariants: {
        variant: "primary",
        size: 1
    },
})

export {ButtonStyle}
