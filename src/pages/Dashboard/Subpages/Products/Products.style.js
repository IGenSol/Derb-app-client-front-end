import styled from 'styled-components';

import {
  CommonGridStyle,
  CommonSpacing,
} from '../../../../style/commomStyle';

export const ProductStyle = styled.main`
  ${CommonGridStyle({ columnGap: "3rem", rowGap: "3rem" })};
  ${CommonSpacing};
`;
