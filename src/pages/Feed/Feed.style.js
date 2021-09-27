import styled from "styled-components";

import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
} from "../../style/commomStyle";

export const FeedStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};
  ${CommonGridStyle({
    columns: "30rem 1fr",
    columnGap: "8rem",
    align: "flex-start",
  })};

  margin-top: 4rem;

  .following-wrapper {
    position: sticky;
    -webkit-poistion: sticky;
    left: 0;
    top: 8rem;

    padding: 3rem;
    background: ${(p) => p.theme.colors.WHITE_COLOR};

    z-index: 3;

    .heading {
      color: ${(p) => p.theme.colors.GRAY_COLOR};
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
  }

  .user-profiles-wrapper {
    ${CommonGridStyle({
      columns: "1fr 1fr",
      rowGap: "4.4rem",
      columnGap: "2.5rem",
    })};
  }
`;
