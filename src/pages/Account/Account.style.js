import styled from "styled-components";

import {
    CommonButton,
    FlexboxStyle,
} from "../../style/commomStyle";


export const Loginstyle = styled.main`
 
${FlexboxStyle({
    justify: "space-around",
})}
.image-wrapper{    
}
.account-logo{
    width: 35rem;
    height:35rem;
}
`;

export const Inputstyle = styled.main`

p {
    font-size: 2rem;
}
p::before,
p::after {
    display: inline-block;
    content: "";
    border-top: .1rem solid black;
    width: 11rem;
    margin: -.5rem 1rem;
    transform: translateY(-1rem);
}
.inputicon{
    position: absolute;
    padding: 2rem 2rem;
    >svg{
        width:2rem;
        height; 2rem;
       
    }
}
.input-wrapper{
${FlexboxStyle({
    direction: "column",
    rowgap: "1rem",
})}
}
input{
    background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};
    padding: 1.9rem;
    padding-right: 20rem;
    padding-left: 5rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
}

.login-btn{

    ${CommonButton({ padding: '1.8rem 18rem' })} ;
}
.icon{
    >svg{
        width:3rem;
        margin: 2rem;
    }
} 
`;

export const Signupstyle = styled.main`
margin-top: 3rem;
width: 52rem;
.border{
    border:.2rem solid ${(p) => p.theme.colors.DULL_GRAY_COLOR};
    border-radius: 2rem;
}
`;


