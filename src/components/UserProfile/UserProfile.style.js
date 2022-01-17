import styled from "styled-components";
import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";
import { Modal } from "antd";

export const UserProfileStyle = styled.main`
  ${CommonSpacing};

  max-width: 102.4rem;
  margin: 0 auto;

  .user-details {
    margin-top: 5rem;

    @media (max-width: ${(p) => p.theme.breakPoints.tablets}) {
      grid-template-columns: 1fr;
    }

    .user-profile {
      ${CommonGridStyle({ columns: "1fr 30rem", columnGap: "15rem" })};

      .user-info {
        ${CommonGridStyle({
          columns: "3rem 1fr",
          columnGap: "12rem",
          align: "flex-start",
        })};

        @media (max-width: ${(p) => p.theme.breakPoints.largeDevices}) {
          grid-template-columns: 1fr;
        }

        .user-thumbnail {
          display: block;

          width: 12rem;
          border-radius: 50%;
          margin-right: 1rem;
          border: 0.2rem solid ${(p) => p.theme.colors.PRIMARY_COLOR};
          overflow: hidden;

          .user-image {
            max-width: 100%;
            object-fit: contain;
          }
        }

        .user-profile-details {
          .name {
            font-weight: 600;
          }

          .description {
            font-size: 1.6rem;
          }
        }
      }

      .buttons-wrapper {
        text-align: center;

        .profile-button {
          ${CommonButton};

          width: 80%;

          margin-bottom: 2rem;
        }
      }
    }

    .user-connections {
      ${CommonGridStyle({ columns: "repeat(3, 1fr)" })};

      .counter {
        background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};

        text-align: center;
        margin-top: 3rem;
        padding: 1.5rem;
        border-radius: 1rem;

        .counter-no {
          font-weight: 700;
        }
      }
    }

    .about-user {
      margin-top: 3rem;

      .heading {
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .tags-wrapper {
        ${FlexboxStyle};

        flex-wrap: wrap;

        .tags {
          background: ${(p) => p.theme.colors.LIGHT_ORANGE_COLOR};
          padding: 1rem 2rem;
          border-radius: 5rem;
          margin: 1rem 0;
        }
      }
    }
  }
`;

export const ProfileTabsStyle = styled.section`
  margin-top: 3rem;

  .profile-tabs {
    .ant-tabs-tab {
      &:hover {
        color: ${(p) => p.theme.colors.PRIMARY_COLOR};
      }

      &.ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: ${(p) => p.theme.colors.BLACK_COLOR};
        }
      }

      .ant-tabs-tab-btn {
        color: ${(p) => p.theme.colors.BLACK_COLOR};
        font-weight: 600;
      }
    }

    .ant-tabs-ink-bar {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }

    .ant-tabs-content-holder {
      .posts-wrapper {
        ${CommonGridStyle};

        padding: 3rem 1rem;
      }
    }
  }
`;

export const ProfileModalStyle = styled(Modal)`
  .profile-form {
    ${CommonGridStyle({ columns: "1fr 2fr", columnGap: "10rem" })}

    @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
      grid-template-columns: 1fr;
    }

    .profile-detail-wrapper {
      text-align: center;

      #upload-image {
        display: none;
      }

      .image-placeholder {
        width: 30rem;
        height: 30rem;
        border-radius: 50%;

        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.breakPoints.largeDevices}) {
          width: 20rem;
          height: 20rem;
        }
      }
    }

    .profile-form-data {
      .form-title {
        font-weight: 700;
      }

      .form-details {
        ${CommonGridStyle({ columns: "1fr 1fr", columnGap: "1rem" })};

        margin: 1rem 0;

        .form-content {
          label {
            display: block;
            margin-bottom: 1rem;
          }

          .custom-input {
            width: 100%;
            padding: 1rem;
            border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
            border-radius: 0.5rem;
            outline: none;
          }

          &:last-child {
            grid-column: 1/-1;
          }
        }
      }

      .form-footer {
        ${FlexboxStyle({ justify: "flex-end" })};

        button {
          width: 11rem;
          padding: 1rem 1.5rem;
          margin-left: 1rem;
          border: none;
          border-radius: 0.3rem;

          cursor: pointer;

          &.update-button {
            background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
            color: ${({ theme }) => theme.colors.WHITE_COLOR};
          }
        }
      }
    }
  }
`;
