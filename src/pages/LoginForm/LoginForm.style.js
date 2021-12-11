import styled from "styled-components";

import {
  CommonButton,
  CommonGridStyle,
  CommonSpacing,
  CustomContainer,
  FlexboxStyle,
} from "../../style/commomStyle";

export const LoginFormstyle = styled.main`
  ${CustomContainer};
  ${CommonSpacing};
  ${CommonGridStyle({ columns: "1fr 1fr", align: "flex-start" })};

  margin-top: 3rem;

  .account-logo {
    width: 35rem;
    height: 35rem;
  }

  .form-wrapper {
    .ant-tabs-nav-list {
      ${CommonGridStyle({ columns: "1fr 1fr", columnGap: "0" })};

      background: ${(p) => p.theme.colors.FADE_COLOR};
      border-radius: 2rem 2rem 0 0;
      width: 40rem;

      overflow: hidden;

      .ant-tabs-tab {
        justify-content: center;
        color: ${(p) => p.theme.colors.WEB_GRAY_COLOR};

        &:hover {
          color: ${(p) => p.theme.colors.WEB_GRAY_COLOR};
        }

        &.ant-tabs-tab-active {
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};

          .ant-tabs-tab-btn {
            color: ${(p) => p.theme.colors.WHITE_COLOR};
          }
        }
      }

      .ant-tabs-ink-bar {
        display: none;
      }
    }
  }
`;

export const LoginStyle = styled.form`
  width: 40rem;

  margin: 0 auto;

  .error {
    text-align: center;
    color: ${({ theme }) => theme.colors.RED_COLOR};
    font-size: 1.4rem;
  }

  .input-container {
    ${FlexboxStyle({ justify: "flex-start" })};

    background: ${(p) => p.theme.colors.FADE_COLOR};
    padding: 1rem;

    margin-bottom: 2rem;

    .icon {
      > svg {
        width: 2rem;
        fill: ${(p) => p.theme.colors.DARK_SILVER_COLOR};
      }
    }

    .custom-input {
      background: none;
      width: 100%;
      padding: 1rem;

      border: none;
      outline: none;
    }
  }

  .login-btn {
    ${CommonButton};

    width: 100%;
  }

  .continue-text {
    margin: 3rem auto;
    text-align: center;

    &::before,
    ::after {
      display: inline-block;
      content: "";
      border-top: 0.1rem solid black;
      width: 11rem;
      margin: -0.5rem 1rem;
      transform: translateY(-1rem);
    }
  }

  .social-icon {
    ${FlexboxStyle({ justify: "center" })};

    > svg {
      width: 3rem;
      margin: 0 2rem;
    }
  }
`;

export const Signupstyle = styled.main`
  width: 40rem;
  margin: 0 auto;

  .input-container {
    ${FlexboxStyle({ justify: "flex-start" })};

    background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};

    padding: 0 1rem;
    margin-bottom: 1rem;

    .icon {
      > svg {
        fill: ${(p) => p.theme.colors.DARK_SILVER_COLOR};

        width: 2rem;
      }
    }

    .custom-input {
      background: none;

      padding: 1.9rem;
      width: 100%;
      border: none;
      outline: none;
      border-radius: 0.5rem;
    }

    .select-user-input {
      background: ${(p) => p.theme.colors.DULL_GRAY_COLOR};

      border: none;
      width: 100%;
      padding: 2rem 1rem;
      outline: none;

      cursor: pointer;

      option {
        padding: 1rem;
      }
    }
  }

  .login-btn {
    ${CommonButton({ padding: "2rem" })};

    width: 100%;
  }

  .continue-text {
    margin: 3rem auto;
    text-align: center;

    &::before,
    ::after {
      display: inline-block;
      content: "";
      border-top: 0.1rem solid black;
      width: 11rem;
      margin: -0.5rem 1rem;
      transform: translateY(-1rem);
    }
  }

  .social-icon {
    ${FlexboxStyle({ justify: "center" })};

    > svg {
      width: 3rem;
      margin: 0 2rem;
    }
  }
`;
