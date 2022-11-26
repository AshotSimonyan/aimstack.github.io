import {ConfigType} from "@stitches/react/types/config";
import {OpenSans} from 'styles/fonts/fonts'
import Theme = ConfigType.Theme;

const theme:Theme = {
    fonts: {
        OpenSans: OpenSans.style.fontFamily,
        base: '$OpenSans'
    },
    colors: {
        blue: '#1093F2',
        darkBlue: '#0C1031',
        bigStone: '#191D3C',
        bigStoneHover: '#313551',
        green: '#14C89D',
        black: '#000000',
        white: '#ffffff',
        white100: 'rgba(255,255,255,0.1)',
        white500: 'rgba(255,255,255,0.5)',

        primary: '$blue',
        secondary: '$green',
        textColor: '$black',
        bgColor: '$darkBlue',
    },
    fontSizes: {
        1: '68px',
        2: '64px',
        3: '44px',
        4: '24px',
        5: '20px',
        6: '18px',
        7: '16px',
        8: '14px',
        m1: '32px',
        m4: '22px',
        m5: '16px',

        baseSize: '$7'
    },
    space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
    },
    fontWeights: {
        1: "400",
        2: "500",
        3: "600",
        4: "700",
        5: "800",
    },
    shadows: {
        1: '0px 60px 66px -65px rgba(11, 47, 97, 0.2)',
        2: '0px 96px 66px -65px rgba(11, 47, 97, 0.2)',
    },
    radii: {
        1: '6px',
        2: '8px'
    },
    transitions: {
        main: '0.2s ease-out',
    },

}

export default theme
