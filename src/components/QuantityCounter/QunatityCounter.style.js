import styled from "styled-components";
import { CommonGridStyle, FlexboxStyle } from "../../style/commomStyle";

export const QuantityCounterStyle = styled.article`
  ${CommonGridStyle({ columns: "5rem 10rem 5rem", columnGap: "0" })};

  .counter-button {
    ${FlexboxStyle({ justify: "center" })};

    padding: 1rem 1.5rem;
    border: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};

    color: ${(p) => p.theme.colors.GRAY_COLOR};
    font-size: 2rem;
    background: none;
    outline: none;
    cursor: pointer;

    height: 5rem;
  }

  .counter {
    border: none;
    border-top: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
    border-bottom: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
    padding: 1rem;
    outline: none;
    text-align: center;

    width: 100%;
    height: 5rem;
  }
`;
