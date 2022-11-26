import {styled} from "styles";

const WhyUseAimStyle = styled("section", {
    py: "150px",
})
const StepRow = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})
const Left = styled("div", {
    '& ul': {
        '& li': {
            marginBottom: "$4",
            position: "relative",
            paddingLeft: '20px',

            "&:before": {
                content: "•",
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: '24px',
                color: "$secondary"
            }
        }
    }
})
const Right = styled("div", {
    maxWidth: '610px',
    marginLeft: '$4'
})

const ButtonLink = styled("a", {
    display: 'flex',
    alignItems: 'center',
    color: '$primary',
    fontFamily: '$OpenSans600',
    textDecoration: 'none',

    '& .icon': {
        fill: '$primary',
        marginLeft: "$4"
    }
})

export {WhyUseAimStyle, StepRow, Left, Right, ButtonLink}
