import styled from "styled-components";

import { FlexboxStyle } from "../../style/commomStyle";

export const NavgationCarousalStyle = styled.section`
  background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};

  padding: 1rem 5rem;
  margin: 3rem 0;
  border-radius: 1rem;

  .carouselItem {
    ${FlexboxStyle({ justify: "flex-start" })};

    text-decoration: none;
    color: ${(p) => p.theme.colors.DARK_COLOR};

    .tab-icon {
      margin-right: 1rem;

      > svg {
        width: 3rem;
      }
    }
  }

  .react-multiple-carousel__arrow {
    background: none;

    &::before {
      color: ${(p) => p.theme.colors.DARK_COLOR};
    }
  }

  .react-multiple-carousel__arrow {
    z-index: 5;
  }
`;

export const ProductCarousalStyle = styled.section`
  padding: 3rem 0;

  .carousal-header {
    position: relative;

    .carousal-title {
      background: ${(p) => p.theme.colors.WHITE_COLOR};
      display: inline-block;

      z-index: 2;
      text-transform: uppercase;
      padding-right: 1rem;
    }

    .line {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: -1;
      width: 90%;
      height: 0.1rem;
      background: ${(p) => p.theme.colors.CADET_GREY_COLOR};
    }
  }

  .carousal-wrapper {
    margin: 3rem 0;

    .card-wrapper {
      margin-left: 2rem;
    }
  }

  .react-multiple-carousel__arrow {
    z-index: 5;
  }
`;
