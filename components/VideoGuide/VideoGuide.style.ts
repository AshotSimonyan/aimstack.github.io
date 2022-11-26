import {styled} from "styles";

const VideoGuideStyle = styled("section", {
    paddingTop: "64px",
    paddingBottom: "150px",
})
const VideoWrapper = styled("div", {
    paddingBottom: "62.5%",
    position: "relative",

    '& iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        borderRadius: '$2',
        boxShadow: "$2"
    }
})

export {VideoGuideStyle, VideoWrapper}
