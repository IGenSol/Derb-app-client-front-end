import styled from "styled-components";

import { FlexboxStyle } from "../../style/commomStyle";

export const HorizontalCardStyle = styled.figure`
  ${FlexboxStyle};

  .thumbnail-wrapper {
    .icon {
      > svg {
        width: 3rem;
      }
    }
  }

  .card-details {
    margin-left: 1rem;
    .description {
      color: ${(p) => p.theme.colors.SECONDARY_COLOR};
    }
  }
`;

export const LiveCardStyle = styled.figure`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  .buynow-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;

    padding: 2rem;
    border: none;
    border-radius: 0 0 0 0.5rem;
    background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    color: ${(p) => p.theme.colors.WHITE_COLOR};
    opacity: 0.7;
    cursor: pointer;
    transition: ${(p) => p.theme.transitions.customTransition};

    &:hover {
      opacity: 1;
    }
  }

  .image-thumbnail {
    position: relative;
    display: block;
    width: 100%;
    height: 40rem;

    &::after {
      content: "";
      background: ${(p) => p.theme.colors.DARK_COLOR};
      width: 100%;
      height: 105%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }

    .thumbnail {
      max-width: 100%;
    }
  }

  .details {
    ${FlexboxStyle};

    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    .card-text {
      padding: 1.5rem;
      width: 100%;

      .comment-wrapper {
        height: 12rem;
        overflow-y: auto;
        margin-bottom: 2rem;

        &::-webkit-scrollbar {
          display: none;
        }

        .comments {
          ${FlexboxStyle({ justify: "flex-start" })};

          margin-bottom: 1rem;

          .profile-image {
            display: block;

            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            overflow: hidden;

            .user-profile {
              max-width: 100%;
            }
          }

          .user-details {
            color: ${(p) => p.theme.colors.WHITE_COLOR};

            margin-left: 1rem;

            .user-name {
              font-size: 1.2rem;
              font-weight: ${(p) => p.theme.fontWeights.bold};
              color: ${(p) => p.theme.colors.WHITE_COLOR};
            }
            .comment {
              font-size: 1rem;
              font-weight: ${(p) => p.theme.fontWeights.regular};
            }
          }
        }
      }

      .comment-box {
        width: 100%;
        padding: 1rem;
        border: none;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 3rem;
      }
    }

    .card-tabs {
      padding: 1rem;

      .tabs-wrapper {
        list-style: none;

        .icon-container {
          ${FlexboxStyle({ direction: "column" })}

          margin-bottom: 1rem;

          .like-button {
            background: none;
            border: none;
            cursor: pointer;

            > svg {
              width: 3rem;
              fill: ${(p) =>
                p.heartActive
                  ? (p) => p.theme.colors.RED_COLOR
                  : (p) => p.theme.colors.ALTO_COLOR};
            }
          }

          .count {
            color: ${(p) => p.theme.colors.WHITE_COLOR};
          }

          .eye-icon {
            > svg {
              width: 3rem;
              fill: ${(p) => p.theme.colors.ALTO_COLOR};
            }
          }

          .profile-link {
            display: block;
            width: 5rem;
            height: 5rem;

            border-radius: 50%;
            overflow: hidden;

            .user-profile-image {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
`;

export const VerticalCardStyle = styled.figure`
  ${FlexboxStyle({ justify: "flex-start" })};

  margin-bottom: 2rem;

  .thumbnail-wrapper {
    display: block;

    width: 10rem;
    border-radius: 50%;
    overflow: hidden;
    border: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};

    z-index: 2;

    .user-image {
      max-width: 100%;
      border-radius: 50%;
    }
  }

  .card-icon {
    > svg {
      width: 4.5rem;
    }
  }

  .user-details {
    background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};

    width: 100%;
    margin-left: -2.5rem;
    padding: 2rem 3rem;
    padding-left: 5rem;
    border-radius: 1rem;

    z-index: -1;

    .heading {
      font-size: 1.5rem;
      color: ${(p) => p.theme.colors.BLACK_COLOR};
    }

    .sub-heading {
      color: ${(p) => p.theme.colors.MEDIUM_GRAY_COLOR};
    }
  }
`;

export const ProductCardStyle = styled.figure`
  .thumbnail-wrapper {
    position: relative;
    display: block;

    width: 30rem;
    height: 30rem;

    overflow: hidden;

    &:hover {
      > .image-hover-buttons {
        clip-path: unset;
        transform: scale(1);
        opacity: 1;
      }
    }

    .image-hover-buttons {
      ${FlexboxStyle({ justify: "center" })};

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: inherit;
      background: rgba(0, 0, 0, 0.2);

      z-index: 1;
      clip-path: circle(50% at 50% 50%);
      transform: scale(0.1);
      opacity: 0;

      transition: 0.15s linear all;

      .icon {
        ${FlexboxStyle({ justify: "center" })};

        background: ${(p) => p.theme.colors.WHITE_COLOR};

        margin-right: 1rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: none;

        cursor: pointer;

        > svg {
          width: 2.2rem;
        }
      }
    }

    .thumbnail {
      max-width: 100%;
    }
  }

  .card-detail {
    .heading {
      color: ${(p) => p.theme.colors.SECONDARY_COLOR};

      font-size: 2.3rem;
      padding-top: 2rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;

      strike {
        color: ${(p) => p.theme.colors.SILVER_SAND_COlOR};
        font-size: 1.6rem;
      }
    }
  }
`;
