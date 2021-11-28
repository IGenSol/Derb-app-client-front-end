import styled from "styled-components";

import { CommonGridStyle, CommonSpacing } from "../../../../style/commomStyle";

export const ProductStyle = styled.section`
  ${CommonGridStyle({
    columns: "repeat(auto-fill, minmax(25rem, 1fr))",
    columnGap: "3rem",
    rowGap: "3rem",
  })};

  ${CommonSpacing};
`;
