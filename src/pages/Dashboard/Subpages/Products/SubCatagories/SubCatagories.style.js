import styled from "styled-components";
import { Modal } from "antd";

import { CommonButton, FlexboxStyle } from "../../../../../style/commomStyle";

export const SubCatagoriesStyle = styled.main`
  .section-header {
    ${FlexboxStyle};

    .sub-catagory-link {
      ${CommonButton}
    }
  }

  .tableoverflow {
    height: 40rem;
    overflow: auto;
    margin-top: 5rem;
    ::-webkit-scrollbar {
      width: 10px;
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

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
      border: 0;
    }

    thead {
      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        background: ${(p) => p.theme.colors.PRIMARY_COLOR};

        th {
          color: ${(p) => p.theme.colors.WHITE_COLOR};
          font-weight: 600;
        }
      }
    }

    tr {
      border: 1px solid #ddd;
      padding: 0.35em;

      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }
    }

    td {
      .subcatagory-name {
        width: 5rem;
        height: 5rem;

        border-radius: 50%;
      }

      @media (max-width: ${(p) => p.theme.breakPoints.mobiles}) {
        position: relative;

        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;

        &::before {
          ${FlexboxStyle({ justify: "center" })};

          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          width: 8rem;
          height: 100%;
          background: ${(p) => p.theme.colors.PRIMARY_COLOR};

          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }

        &:last-child {
          border-bottom: 0;
        }
      }

      .action-buttons-wrapper {
        ${FlexboxStyle({ justify: "center" })};

        .action-button {
          border: none;
          background: none;
          margin-right: 1rem;

          cursor: pointer;

          &:first-of-type {
            > svg {
              fill: ${(p) => p.theme.colors.GREEN_COLOR};
            }
          }

          &:last-of-type {
            > svg {
              fill: ${(p) => p.theme.colors.RED_COLOR};
            }
          }

          > svg {
            width: 2rem;
          }
        }
      }
    }

    th,
    td {
      padding: 0.625em;
      text-align: center;
    }

    th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
  .modal-main {
    position: fixed;
    background: white;
    width: 35%;
    text-align: center;
    height: auto;
    border-radius: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0rem 0.3rem 2rem 0.6rem rgba(3, 3, 3, 0.1);
  }

  .display-block {
    display: block !important;
  }

  .display-none {
    display: none;
  }

  .custom-container {
    width: 80%;
    padding: 1rem;
    margin: 2rem;
    border: 0.1rem solid;
    border-radius: 0.5rem;
  }
  .heading {
    margin: 1rem;
  }

  .add-button {
    ${CommonButton};
    padding: 1.5rem 5rem;
    margin: 1rem;
    margin-bottom: 2rem;
  }

  hr {
    background: ${({ theme }) => theme.colors.PRIMARY_COLOR};
  }
`;

export const UpdatePopupStyle = styled.section`
  margin: 2rem;
  .description {
    margin-bottom: 2rem;
    text-align: left;
  }

  input,
  .dropdown {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
    border: 0.1rem solid;
    border-radius: 0.5rem;
  }

  .submit-btn {
    ${CommonButton};
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
    border-radius: 0;
  }
  .btn {
    ${FlexboxStyle}
  }
`;

export const AddSubCatagoryModalStyle = styled(Modal)`
  .modal-body {
    .catagory-list {
      width: 100%;
      margin: 2rem 0;
      padding: 1rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};

      cursor: pointer;
    }

    .custom-input {
      width: 100%;
      margin: 1rem 0;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.PRIMARY_COLOR};
    }

    .add-button {
      ${CommonButton};

      display: block;
      margin-top: 1rem;
      width: 100%;
    }
  }
`;
