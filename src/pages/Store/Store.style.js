import styled from "styled-components";
import { CommonSpacing, CustomContainer } from "../../style/commomStyle";

export const StoreStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};
`;

export const SiteBannerStyle = styled.section`
  .banner-wrapper {
    display: block;

    .site-banner {
      max-width: 100%;
      border-radius: 2rem;
    }
  }
`;
