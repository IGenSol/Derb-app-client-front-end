import styled from "styled-components";
import {
  CommonButton,
  CommonGridStyle,
  FlexboxStyle,
} from "../../../../../style/commomStyle";

export const CreateStoreStyle = styled.article`
  box-shadow: 0rem 0.3rem 2rem 0.6rem rgba(3, 3, 3, 0.1);
  border-radius: 0.3rem;
  padding: 2rem;
  .header {
    padding-bottom: 2rem;
    margin-bottom: 3rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
  }

  .form {
    ${CommonGridStyle({ columns: "max-content auto max-content auto" })};

    width: 100%;
    margin: auto;
    /* padding: 3rem; */

    @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
      grid-template-columns: auto;
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
    outline: none;
  }

  .search-location {
    width: 100%;

    .search-input {
      width: 100%;
      padding: 0.8rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.ALTO_GRAY_COLOR};
      outline: none;
    }

    .dropdown-list {
      position: absolute;
      padding: 1rem;
      background: ${({ theme }) => theme.colors.WHITE_COLOR};
      z-index: 1;

      .place-suggestion {
        padding: 1rem;
      }
    }
  }

  label {
    font-size: 1.5rem;
  }

  .button-wrapper {
    text-align: end;
    margin-top: 2rem;
    .login-btn {
      ${CommonButton};

      padding: 1rem 2rem;

      /* font-size: 2rem;
      letter-spacing: 0.3rem;
      font-weight: 600; */
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

  .heading {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .user-details {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.3rem;

    .user-data {
      display: grid;
      grid-template-columns: 20rem 1fr;

      h4 {
        font-size: 1.7rem;
        margin-right: 4rem;
        margin-bottom: 1rem;

        &.data-title {
        }
      }
    }
  }

  .option-wrapper {
    .setting {
      display: grid;
      grid-template-columns: auto 37rem;
      column-gap: 1rem;
      row-gap: 1rem;

      margin-bottom: 1rem;

      .text {
        margin-left: 1rem;
        font-size: 1.5rem;
      }
    }
  }

  .deactive-btn {
    ${CommonButton({ padding: "1rem" })};

    margin-top: 1rem;
    float: right;
  }
  input {
    padding: 0.5rem;
  }
`;
