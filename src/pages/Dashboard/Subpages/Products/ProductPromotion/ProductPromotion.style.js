import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const ProductPromotionStyle = styled.main`
  ${CommonSpacing};

  .custom-input {
    width: 70%;
    padding: 1rem;
    outline: none;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${(p) => p.theme.colors.CADET_GREY_COLOR};
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .input-layout {
    ${CommonGridStyle({
      columns: "18rem 1fr",
      columnGap: "1rem",
    })};
  }
`;
