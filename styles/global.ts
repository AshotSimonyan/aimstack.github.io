import {reset} from "./reset";

const global = {
    ...reset,
    body: {
        background: "$white",
        color: "$textColor",
        fontFamily: "$base",
        fontSize: "$baseSize",
        lineHeight: '1.35',
    },
};

export default global
