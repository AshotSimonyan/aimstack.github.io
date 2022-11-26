import {createStitches} from '@stitches/react';
import theme from "./theme";
import utils from "./utils";
import global from "./global";

export const {styled, getCssText, globalCss} = createStitches({
    theme: theme,
    utils: utils,
    media: {
        bp1: '(max-width: 1199px)',
        bp2: '(max-width: 991px)',
        bp3: '(max-width: 767px)',
        bp4: '(max-width: 767px)',
    },
});

const globalStyles = globalCss(global)
globalStyles()







