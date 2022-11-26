import {styled} from "styles";

const TextStyle = styled("p", {
    variants: {
        size: {
            1: {
                fontSize: "$1",
                fontWeight: "$5",
                lineHeight: '1.25',
                '@bp4': {
                    fontSize: '$m1'
                }
            },
            2: {
                fontSize: "$2",
                fontWeight: "$5",
                '@bp4': {
                    fontSize: '$m1'
                }
            },
            3: {
                fontSize: "$3",
                fontWeight: "$5",
                lineHeight: '1.5',
                '@bp4': {
                    fontSize: '$m1'
                }
            },
            4: {
                fontSize: "$4",
                fontWeight: "$4",
                '@bp4': {
                    fontSize: '$m4'
                }
            },
            5: {
                fontSize: "$5",
                '@bp4': {
                    fontSize: '$m5'
                }
            },
            6: {
                fontSize: "$6"
            },
            7: {
                fontSize: "$7"
            },
            8: {
                fontSize: "$8"
            }
        },
    }
})

export default TextStyle
