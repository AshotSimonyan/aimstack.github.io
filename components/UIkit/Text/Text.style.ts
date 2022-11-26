import {styled} from "styles";

 const TextStyle = styled("p", {
     variants: {
         size: {
             1: {
                 fontSize: "$1",
                 fontWeight: 800,
                 '@bp4': {
                     fontSize: '$m1'
                 }
             },
             2: {
                 fontSize: "$2",
                 '@bp4': {
                     fontSize: '$m1'
                 }
             },
             3: {
                 fontSize: "$3",
                 '@bp4': {
                     fontSize: '$m1'
                 }
             },
             4: {
                 fontSize: "$4",
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
             }
         },
     }
})
export default TextStyle
