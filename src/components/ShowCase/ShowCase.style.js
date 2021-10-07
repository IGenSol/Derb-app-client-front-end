import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const ShowCaseStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};

  margin-top: 6.5rem;

  .product-container {
    ${FlexboxStyle({ align: "flex-start" })};

    @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
      flex-direction: column;
    }
  }
`;

export const ProductDetailStyle = styled.article`
  ${FlexboxStyle({ align: "flex-start" })};

  margin-left: 6.6rem;

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    margin-left: 0;
    margin-top: 1rem;
  }

  .details-wrapper {
    .header {
      ${FlexboxStyle};

      .heading {
        font-weight: ${(p) => p.theme.fontWeights.bold};
      }

      .price {
        font-weight: ${(p) => p.theme.fontWeights.bold};
        color: ${(p) => p.theme.colors.PRIMARY_COLOR};
      }
    }
  }
`;

export const ProductFooterStyle = styled.article`
  margin-top: 8rem;

  .product-properties {
    ${CommonGridStyle({ align: "flex-start", columnGap: "10.4rem" })};

    .heading {
      font-weight: ${(p) => p.theme.fontWeights.bold};
      text-transform: uppercase;
    }

    .ingrediants-wrapper {
      width: 16rem;

      .ingrediants {
        list-style: none;

        margin-top: 1rem;

        .ingrediant {
          font-size: 1.5rem;
        }
      }
    }

    .share-link {
      .icons-wrapper {
        ${FlexboxStyle({ justify: "flex-start" })};

        margin-top: 2rem;

        .icon {
          margin-right: 1.5rem;

          > svg {
            width: 2.5rem;
            transition: ${(p) => p.theme.transitions.customTransition};

            &:hover {
              fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
            }
          }
        }
      }
    }
  }

  .quantity {
    .heading {
      margin-bottom: 2rem;
    }
  }

  .buttons-wrapper {
    ${FlexboxStyle({ justify: "center" })};

    margin-top: 8rem;

    .action-btn {
      ${CommonButton({ padding: "2rem", borderRadius: "0" })};

      margin: 0 0.5rem;
      width: 100%;
      max-width: 30rem;
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;

export const ProductSideBarStyle = styled.section`
  margin-left: 10rem;

  display: grid;
  place-items: center;

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    margin-left: 1.5rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
    display: none;
  }

  .profile-image-wrapper {
    .profile-picutre {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;

      border: 0.3rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
    }
  }

  .counter {
    margin-top: 3rem;
    text-align: center;

    &:first-of-type {
      .icon {
        background: red;
      }
    }

    &:last-of-type {
      .icon {
        background: ${(p) => p.theme.colors.PRIMARY_COLOR};
      }
    }

    .icon {
      ${FlexboxStyle};

      padding: 1rem;
      border-radius: 1rem;

      > svg {
        width: 2rem;
        fill: ${(p) => p.theme.colors.WHITE_COLOR};
      }
    }

    .counter-text {
      display: block;
      font-weight: ${(p) => p.theme.fontWeights.bold};
      margin-top: 0.6rem;
    }
  }
`;

export const LiveChannelsStyle = styled.section`
  margin-top: 10rem;

  .live-channels-wrapper {
    .carousal-header {
      .carousal-title {
        width: 100%;
        font-size: 3.5rem;
        text-align: center;
        font-weight: ${(p) => p.theme.fontWeights.bold};
      }

      .line {
        display: none;
      }
    }
  }
`;
