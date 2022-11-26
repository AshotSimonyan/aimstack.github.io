import {styled} from "styles";

const SubscribeStyle = styled("section", {
    padding: '100px 0'
})
const SubscribeInner = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const Left = styled("div", {
    flex: '1',
    marginRight: '80px'
})

const Right = styled("div", {
    flex: '1',
})

export {SubscribeStyle, SubscribeInner, Left, Right}
