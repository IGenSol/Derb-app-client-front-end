import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const ProductListStyle = styled.main`
  ${CommonSpacing};

  .section-header {
    ${FlexboxStyle}

    margin-bottom : 5rem;

    .add-product-button {
      ${CommonButton};
    }
  }

  .products-wrapper {
    ${CommonGridStyle({
      columns: "repeat(auto-fill, minmax(25rem, 1fr))",
      columnGap: "3rem",
      rowGap: "3rem",
    })};
  }
`;
