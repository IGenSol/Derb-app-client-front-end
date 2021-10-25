import styled from "styled-components";
import { CommonGridStyle, CommonSpacing } from "../../../../style/commomStyle";

export const ProductStyle = styled.main`
  ${CommonSpacing};
  ${CommonGridStyle({ columns: "repeat(auto-fill, minmax(30rem, 1fr))", columnGap: "1rem", rowGap: "5rem" })};
`;
