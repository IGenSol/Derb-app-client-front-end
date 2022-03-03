import styled from "styled-components";

import {
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const CatagoriesStyle = styled.main`
  ${CommonSpacing};

  .category_wrapper {
    ${CommonGridStyle}
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
  }

  .category_box {
    width: 70%;
    display: flex;
    height: 6rem;
    border-radius: 1rem;
    box-shadow: 0rem 0.3rem 2rem 0.6rem rgb(3 3 3 / 10%);
    align-content: flex-start;
    justify-content: center;
    align-items: center;
  }

  .order-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .header {
    ${FlexboxStyle({
      justify: "space-between",
      align: "center",
    })}
  }
`;
