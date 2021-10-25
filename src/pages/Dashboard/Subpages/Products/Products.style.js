import styled from "styled-components";
import { CommonGridStyle, CommonSpacing } from "../../../../style/commomStyle";

export const ProductStyle = styled.main`
  ${CommonSpacing};
  ${CommonGridStyle({ columnGap: "5rem", rowGap: "5rem" })};
`;
