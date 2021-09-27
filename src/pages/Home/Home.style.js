import styled from "styled-components";

import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
} from "../../style/commomStyle";

export const HomeStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 5rem;

  .discover-prducts-wrapper {
    ${CommonGridStyle};

    margin-bottom: 2rem;
  }
`;
