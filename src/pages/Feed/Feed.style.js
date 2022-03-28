import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const FeedStyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};
  ${CommonGridStyle({
    columns: "1fr 2fr 1fr",
    columnGap: "5rem",
    align: "flex-start",
  })};

  background: ${(p) => p.theme.colors.DIM_GRAY_COLOR};

  padding-top: 4rem;

  @media (max-width: ${(p) => p.theme.breakPoints.extraLargeDevices}) {
    grid-column-gap: 2rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
    grid-template-columns: 1fr;
  }

  .friends-wrapper {
    position: sticky;
    -webkit-poistion: sticky;
    left: 0;
    top: 10rem;
    height: 100vh;

    padding: 3rem;
    background: ${(p) => p.theme.colors.WHITE_COLOR};

    /* z-index: 3; */

    @media (max-width: ${(p) => p.theme.breakPoints.laptops}) {
      display: none;
    }

    .title {
      color: ${(p) => p.theme.colors.GRAY_COLOR};
      font-size: 1.6rem;
      margin-bottom: 3rem;
      text-transform: uppercase;
    }

    .friends-list {
      height: 35rem;
      overflow-x: auto;
      padding-right: 1rem;

      &::-webkit-scrollbar {
        width: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${(p) => p.theme.colors.GRAY_COLOR};
      }

      .friend-card {
        margin-bottom: 1rem;

        .thumbnail-wrapper {
          width: 6rem;
        }

        .user-details {
          margin-left: -3.5rem;

          .heading {
            font-weight: 500;
          }
        }
      }
    }
  }

  .user-profiles-wrapper {
    .add-post-section {
      background: ${(p) => p.theme.colors.WHITE_COLOR};

      margin-bottom: 1.5rem;
      border-radius: 1rem;

      .post-input {
        ${FlexboxStyle({ align: "flex-start" })};

        padding: 1.5rem;

        .profile-image {
          width: 5rem;
          border-radius: 50%;
          margin-right: 2rem;
        }

        textarea {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          font-size: 1.5rem;
        }
      }

      .add-post-footer {
        ${CommonGridStyle({ columns: "repeat(3, 1fr)", columnGap: "0" })};

        input[type="file"] {
          display: none;
        }

        .add-post-btn {
          ${FlexboxStyle({ justify: "center" })};

          padding: 1rem 3rem;
          width: 100%;
          background: none;
          border: 0.1rem solid ${(p) => p.theme.colors.CULTURED_GRAY_COLOR};
          text-align: center;
          cursor: pointer;

          &:last-child {
            background: ${(p) => p.theme.colors.PRIMARY_COLOR};
            color: ${(p) => p.theme.colors.WHITE_COLOR};
          }

          .icon {
            width: 2rem;
            margin-right: 1rem;

            > svg {
              width: 1.2rem;
              fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
            }
          }
        }
      }
    }

    .user-profile {
      background: ${(p) => p.theme.colors.WHITE_COLOR};

      margin-bottom: 1rem;
      padding: 1.5rem;
      border-radius: 0.5rem;
    }
  }

  .profile-detail {
    position: sticky;
    -webkit-poistion: sticky;
    right: 0;
    top: 10rem;

    @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
      display: none;
    }

    .user-profile {
      background: ${(p) => p.theme.colors.WHITE_COLOR};
      border-radius: 1rem 1rem 0 0;
      overflow: hidden;
      padding: 1rem;

      .profile-header {
        background: ${(p) => p.theme.colors.PRIMARY_COLOR};
        width: 100%;
        height: 10rem;

        position: relative;

        .profile-image {
          position: absolute;
          bottom: -2rem;
          left: 1rem;

          width: 6rem;
          border: 0.3rem solid ${(p) => p.theme.colors.WHITE_COLOR};
          border-radius: 50%;
        }
      }

      .name {
        font-size: 1.8rem;
        font-weight: 600;
        margin-top: 2rem;
      }

      .username {
        color: ${(p) => p.theme.colors.SILVER_SAND_COlOR};

        font-size: 1.2rem;
      }

      .profile-details {
        margin-top: 3rem;

        .details {
          ${FlexboxStyle};

          h3 {
            font-size: 1.5rem;
            color: ${(p) => p.theme.colors.SECONDARY_COLOR};
            margin-bottom: 1rem;

            &.no {
              color: ${(p) => p.theme.colors.PRIMARY_COLOR};
            }
          }
        }
      }
    }
  }
`;

export const Modelstyle = styled.main`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 40%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    @media (max-width: 580px) {
      width: 80%;
    }
    @media (max-width: 400px) {
      width: 95%;
    }
  }

  .display-block {
    display: block !important;
  }

  .display-none {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .textbox {
    max-height: 30rem;
    margin: auto;
    width: 80%;
  }
  .cancel {
    padding: 1rem;
    position: absolute;
    right: 0;
    cursor: pointer;
    > svg {
      width: 2rem;
    }
  }

  .multi_image_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    margin: auto;
  }

  .multi_image {
    width: 10rem;
    height: 10rem;
  }

  .heading {
    font-size: 3rem;
    font-weight: 500;
    padding: 1rem;
    text-align: center;
  }
  textarea {
    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;
  }
  .review_count {
    display: flex;
    justify-content: space-between;
  }

  .imagecontainer {
    height: 20rem;
    width: 80%;
    margin: auto;
    overflow: auto;
    border: 0.1rem solid rgb(133, 133, 133);
    border-radius: 0.3rem;

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .add-post-footer {
    ${CommonGridStyle({ columns: "repeat(3, 1fr)", columnGap: "0" })};

    input[type="file"] {
      display: none;
    }

    .add-post-btn {
      ${FlexboxStyle({ justify: "center" })};

      padding: 1rem 3rem;
      width: 100%;
      background: none;
      border: 0.1rem solid ${(p) => p.theme.colors.CULTURED_GRAY_COLOR};
      text-align: center;
      cursor: pointer;

      &:last-child {
        background: ${(p) => p.theme.colors.PRIMARY_COLOR};
        color: ${(p) => p.theme.colors.WHITE_COLOR};
      }

      .icon {
        width: 2rem;
        margin-right: 1rem;

        > svg {
          width: 1.2rem;
          fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
        }
      }
    }
  }
`;
