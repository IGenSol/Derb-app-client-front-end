import styled from "styled-components";
import {
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const DiscoverStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 2rem;

  .discover-prducts-wrapper {
    ${CommonGridStyle};

    margin-bottom: 2rem;
  }
`;

export const FollowingStyle = styled.section`
  ${CommonGridStyle({
    columns: "30rem 1fr",
    columnGap: "8rem",
    align: "flex-start",
  })};

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
