import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  FlexboxStyle,
} from "../../../../style/commomStyle";

export const ProfileStyle = styled.main`
  ${CommonSpacing};

  .section-header {
    margin-bottom: 5rem;

    .section-title {
      font-size: 2.4rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    .description {
      color: ${(p) => p.theme.colors.WEB_GRAY_COLOR};
    }
  }

  .profile-body {
    ${CommonGridStyle({ columns: "30rem 1fr", align: "stretch" })};
  }
`;

export const ProfileInfoStyle = styled.article`
  border: 0.1rem solid ${(p) => p.theme.colors.MEDIUM_GRAY_COLOR};
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.17);
  padding: 1.5rem;
  border-radius: 1rem;

  .user-details {
    text-align: center;

    .user-profile-wrapper {
      ${FlexboxStyle({ justify: "center" })};

      margin-bottom: 1rem;

      .user-profile {
        width: 8rem;
      }
    }

    .name {
      font-size: 2.5rem;
      font-weight: 600;
    }

    .email {
      font-size: 1.5rem;
    }

    .social-icons-wrapper {
      ${FlexboxStyle({ justify: "center" })};

      margin-top: 1rem;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid ${(p) => p.theme.colors.CADET_GREY_COLOR};

      .icon {
        ${FlexboxStyle({ justify: "center" })};

        background: ${(p) => p.theme.colors.PRIMARY_COLOR};
        width: 5rem;
        height: 5rem;
        margin-right: 1rem;
        border-radius: 50%;

        > svg {
          width: 2rem;
          fill: ${(p) => p.theme.colors.WHITE_COLOR};
        }
      }
    }
  }

  .employee-status {
    margin-top: 1rem;

    .heading {
      font-size: 1.7rem;
      font-weight: 600;
    }

    .employee-performance {
      ${FlexboxStyle};

      margin-top: 1rem;

      h3 {
        font-size: 1.5rem;
        color: ${(p) => p.theme.colors.WEB_GRAY_COLOR};
      }
    }
  }
`;

export const ProfileDetailsStyle = styled.section`
  border: 0.1rem solid ${(p) => p.theme.colors.MEDIUM_GRAY_COLOR};
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.17);
  padding: 1.5rem;
  border-radius: 1rem;

  .ant-tabs {
    .ant-tabs-tab {
      &:hover {
        .tab {
          color: ${(p) => p.theme.colors.PRIMARY_COLOR};

          > svg {
            fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }
        }
      }

      &.ant-tabs-tab-active {
        .tab {
          color: ${(p) => p.theme.colors.PRIMARY_COLOR};

          > svg {
            fill: ${(p) => p.theme.colors.PRIMARY_COLOR};
          }
        }
      }

      .tab {
        > svg {
          width: 1.3rem;
          margin-right: 1rem;
        }
      }

      .ant-tabs-tab-btn {
        &:focus {
          color: unset;
        }
      }
    }

    .ant-tabs-ink-bar {
      background: ${(p) => p.theme.colors.PRIMARY_COLOR};
    }
  }

  .profile-header {
    ${FlexboxStyle};

    .heading {
      margin: 0;
    }

    .more-option-button {
      background: none;
      border: none;

      cursor: pointer;

      > svg {
        width: 2rem;
        fill: ${({ theme }) => theme.colors.SECONDARY_COLOR};
      }
    }
  }

  .heading {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .user-details {
    padding: 1rem;

    .user-data {
      ${FlexboxStyle({ justify: "flex-start" })};

      h4 {
        font-size: 1.7rem;
        margin-right: 4rem;
        margin-bottom: 1rem;

        &.data-title {
          width: 11rem;
        }
      }
    }
  }

  .option-wrapper {
    .setting {
      ${FlexboxStyle({ justify: "flex-start" })};

      margin-bottom: 0.5rem;

      .text {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }
  }

  .deactive-btn {
    ${CommonButton({ padding: "1rem" })};

    margin-top: 1rem;
  }
`;

export const UpdateProfileModalStyle = styled(Modal)`
  .custom-input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: none;
    background: ${({ theme }) => theme.colors.FADE_COLOR};
  }

  .modal-footer {
    margin-bottom: 1rem;

    button {
      padding: 1rem;
      width: 100%;
      border-radius: 0.4rem;
      border: none;
      margin-top: 1rem;

      cursor: pointer;

      &.update-button {
        background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
        color: ${({ theme }) => theme.colors.WHITE_COLOR};
      }
    }
  }
`;
