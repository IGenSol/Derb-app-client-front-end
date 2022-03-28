import styled from "styled-components";
import { Modal } from "antd";
import { Link } from "react-router-dom";

import { CommonGridStyle, FlexboxStyle } from "../../style/commomStyle";

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
    cursor: pointer;

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
      width: 100%;
      height: 100%;
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

export const VerticalCardStyle = styled(Link)`
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

    z-index: 0;

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

export const DeleteModalSytle = styled(Modal)`
  .button-wrapper {
    ${FlexboxStyle({ justify: "flex-end" })};

    margin-top: 2rem;

    button {
      padding: 0.7rem 2rem;
      margin-left: 1rem;
      border-radius: 0.3rem;
      border: none;

      cursor: pointer;

      &.delete-button {
        background: ${({ theme }) => theme.colors.RED_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
      }
    }
  }
`;

export const PostCardStyle = styled.figure`
  .card-header {
    ${FlexboxStyle};

    .user-details {
      ${FlexboxStyle({ justify: "flex-start" })};

      .user-img {
        width: 5rem;
        height: 5rem;

        border-radius: 50%;
      }

      .user-info {
        margin-left: 1rem;

        .user-name {
          font-size: 1.7rem;
          font-weight: 700;
        }

        .post-date {
          font-size: 1rem;
        }
      }
    }

    .more-options {
      .more-option-button {
        background: none;
        border: none;

        cursor: pointer;

        > svg {
          width: 1.3rem;
          fill: ${({ theme }) => theme.colors.SECONDARY_COLOR};
        }
      }
    }
  }
`;

export const CardBodyStyle = styled.figcaption`
  margin-top: 1.5rem;

  .post-text {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .image-wrapper {
    display: grid;
    place-items: center;

    .post-image {
      max-width: 100%;
      border-radius: 1rem;
      margin: 1rem 0;
      height: 40rem;
    }
  }
`;

export const PostFooterStyle = styled.article`
  /* border-top: 0.1rem solid ${({ theme }) => theme.colors.DIM_GRAY_COLOR}; */
  margin-top: 3rem;
  .post-buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border-bottom: 0.1rem solid #f9f9fb;

    .likecolor {
      color: red;
    }

    .post-button {
      ${FlexboxStyle({ justify: "flex-start" })};

      color: ${({ theme }) => theme.colors.SILVER_SAND_COlOR};
      background: none;
      border: none;
      padding: 1rem;
      font-weight: 700;

      cursor: pointer;

      .icon {
        fill: ${({ theme }) => theme.colors.SILVER_SAND_COlOR};

        width: 2rem;
        margin-top: 0.4rem;
        margin-right: 1rem;
      }
    }
  }

  .comment-box-wrapper {
    ${FlexboxStyle};

    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 5rem;
    background: ${({ theme }) => theme.colors.CULTURED_GRAY_COLOR};

    .comment-input-box {
      flex: 1;
      border: none;
      outline: none;
      background: none;
    }

    .send-button {
      background: none;
      border: none;
      cursor: pointer;
      padding-top: 0.5rem;

      > svg {
        width: 1.6rem;
        fill: ${({ theme }) => theme.colors.DARK_SILVER_COLOR};
      }
    }
  }
`;
