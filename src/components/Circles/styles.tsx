import styled,{css} from "styled-components";

import { CircleProp } from ".";

export const Container = styled.div<CircleProp>`
${({color}) => css`
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 margin : 3px ;
 border-radius: 50%;
 background-color: ${color};
`}
`